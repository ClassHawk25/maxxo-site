import { NextRequest, NextResponse } from 'next/server';
import { ghlConfig } from '@/lib/constants';

// ============================================================================
// GO HIGH LEVEL WEBHOOK SUBMISSION + EMAIL NOTIFICATIONS
// ============================================================================

const NOTIFICATION_EMAILS = ['josh@maxxo.ai', 'simon@maxxo.ai'];

async function sendNotificationEmail(formData: {
  fullName: string;
  company: string;
  jobTitle: string;
  mobile: string;
  email: string;
}) {
  // Use Resend, SendGrid, or another email service
  // For now, we'll use a simple fetch to a webhook or email API
  const emailApiKey = process.env.RESEND_API_KEY;

  if (!emailApiKey) {
    console.log('Email API key not configured. Skipping email notification.');
    return;
  }

  const emailBody = `
New Demo Request from Maxxo.ai Website

Name: ${formData.fullName}
Company: ${formData.company}
Job Title: ${formData.jobTitle}
Mobile: ${formData.mobile}
Email: ${formData.email}

Submitted: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
  `.trim();

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${emailApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Maxxo.ai <notifications@maxxo.ai>',
        to: NOTIFICATION_EMAILS,
        subject: `New Demo Request: ${formData.fullName} from ${formData.company}`,
        text: emailBody,
      }),
    });

    if (!response.ok) {
      console.error('Email notification failed:', await response.text());
    } else {
      console.log('Email notification sent to:', NOTIFICATION_EMAILS.join(', '));
    }
  } catch (error) {
    console.error('Email notification error:', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { fullName, company, jobTitle, mobile, email } = body;

    // Validate required fields
    if (!fullName || !company || !email || !mobile) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Split name into first and last
    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || '';

    // Prepare payload for GHL webhook
    // GHL webhooks typically expect these field names
    const ghlPayload = {
      // Contact fields
      firstName,
      lastName,
      name: fullName,
      email,
      phone: mobile,

      // Custom fields - adjust these to match your GHL custom field IDs
      companyName: company,
      company_name: company,
      jobTitle,
      job_title: jobTitle,

      // Source tracking
      source: 'Website - Demo Form',
      tags: ['Website Lead', 'Demo Request'],

      // Additional metadata
      submittedAt: new Date().toISOString(),
      pageUrl: request.headers.get('referer') || 'https://maxxo.ai',
    };

    // Send notification emails (don't wait for it to complete)
    sendNotificationEmail({ fullName, company, jobTitle, mobile, email });

    // Check if webhook URL is configured
    if (!ghlConfig.webhookUrl || ghlConfig.webhookUrl === 'YOUR_GHL_WEBHOOK_URL_HERE') {
      console.log('GHL Webhook not configured. Form data:', ghlPayload);

      // Return success anyway for testing
      return NextResponse.json({
        success: true,
        message: 'Demo request received (webhook not configured)',
        data: ghlPayload,
      });
    }

    // Send to GHL webhook
    const ghlResponse = await fetch(ghlConfig.webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ghlPayload),
    });

    if (!ghlResponse.ok) {
      console.error('GHL webhook error:', await ghlResponse.text());
      throw new Error('Failed to submit to CRM');
    }

    // Log successful submission
    console.log('Demo request submitted to GHL:', {
      name: fullName,
      email,
      company,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Demo request submitted successfully',
    });

  } catch (error) {
    console.error('Form submission error:', error);

    return NextResponse.json(
      {
        error: 'Failed to submit form',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// ============================================================================
// OPTIONS (for CORS preflight if needed)
// ============================================================================

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
