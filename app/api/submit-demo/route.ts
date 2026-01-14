import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// ============================================================================
// DEMO FORM SUBMISSION API
// ============================================================================

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, company, jobTitle, mobile, email } = body;

    // Validate required fields
    if (!fullName || !company || !jobTitle || !mobile || !email) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send notification email
    const { error } = await resend.emails.send({
      from: 'Maxxo.ai <noreply@maxxo.ai>',
      to: ['josh@maxxo.ai', 'simon@maxxo.ai'],
      subject: `New Demo Request: ${company}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send notification email' },
        { status: 500 }
      );
    }

    console.log('Demo request submitted:', {
      name: fullName,
      email,
      company,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Demo submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit demo request' },
      { status: 500 }
    );
  }
}
