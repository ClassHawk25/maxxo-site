import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';

// ============================================================================
// DEMAND INTEREST FORM SUBMISSION API
// ============================================================================

interface InterestFormData {
  name: string;
  email: string;
  phone?: string;
  careHomeName?: string;
  interestLevel: string;
  message?: string;
}

const INTEREST_LEVEL_LABELS: Record<string, string> = {
  exploring: 'Just exploring',
  monthly_tracking: 'Want monthly tracking',
  improve_visibility: 'Need help improving visibility',
  ready_to_start: 'Ready to get started',
};

export async function POST(request: Request) {
  try {
    const body: InterestFormData = await request.json();
    const { name, email, phone, careHomeName, interestLevel, message } = body;

    // Validate required fields
    if (!name || !email || !interestLevel) {
      return NextResponse.json(
        { error: 'Name, email, and interest level are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Get human-readable interest level
    const interestLevelLabel = INTEREST_LEVEL_LABELS[interestLevel] || interestLevel;

    // Save to database - upsert into existing demand_leads table
    const supabase = getSupabase();

    // Look up existing lead by email AND care_home_name
    const { data: existingLead } = await supabase
      .from('demand_leads')
      .select('id')
      .eq('email', email)
      .eq('care_home_name', careHomeName || '')
      .maybeSingle();

    if (existingLead) {
      // Update existing lead with interest form data
      const { error: updateError } = await supabase
        .from('demand_leads')
        .update({
          contact_name: name,
          phone: phone || null,
          interest_level: interestLevel,
          interest_message: message || null,
          interest_submitted_at: new Date().toISOString(),
        })
        .eq('id', existingLead.id);

      if (updateError) {
        console.error('Database update error:', updateError);
        // Continue with email even if database fails
      }
    } else {
      // Insert new lead
      const { error: insertError } = await supabase
        .from('demand_leads')
        .insert({
          contact_name: name,
          email,
          phone: phone || null,
          care_home_name: careHomeName || null,
          interest_level: interestLevel,
          interest_message: message || null,
          interest_submitted_at: new Date().toISOString(),
        });

      if (insertError) {
        console.error('Database insert error:', insertError);
        // Continue with email even if database fails
      }
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send notification email to team
    const { error: emailError } = await resend.emails.send({
      from: 'Maxxo.ai <noreply@maxxo.ai>',
      to: ['josh@maxxo.ai', 'simon@maxxo.ai'],
      subject: `Demand Interest: ${careHomeName || name} - ${interestLevelLabel}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #01B5D8, #0891B2); padding: 20px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0;">New Demand Interest Lead</h2>
          </div>
          <div style="background: #f8f9fa; padding: 24px; border-radius: 0 0 12px 12px;">
            <p style="margin: 0 0 16px; color: #03045E;"><strong>Source:</strong> Demand Report Upsell</p>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e0e0e0; color: #666;">Name</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e0e0e0; color: #03045E; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e0e0e0; color: #666;">Email</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e0e0e0; color: #03045E; font-weight: 500;">
                  <a href="mailto:${email}" style="color: #01B5D8;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e0e0e0; color: #666;">Phone</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e0e0e0; color: #03045E; font-weight: 500;">
                  <a href="tel:${phone}" style="color: #01B5D8;">${phone}</a>
                </td>
              </tr>
              ` : ''}
              ${careHomeName ? `
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e0e0e0; color: #666;">Care Home</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e0e0e0; color: #03045E; font-weight: 500;">${careHomeName}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e0e0e0; color: #666;">Interest Level</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e0e0e0; color: #03045E; font-weight: 500;">
                  <span style="background: #01B5D8; color: white; padding: 4px 12px; border-radius: 16px; font-size: 14px;">
                    ${interestLevelLabel}
                  </span>
                </td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 8px 0; color: #666;" colspan="2">
                  <strong>Message:</strong>
                  <p style="margin: 8px 0 0; color: #03045E; background: white; padding: 12px; border-radius: 8px; border: 1px solid #e0e0e0;">
                    ${message.replace(/\n/g, '<br>')}
                  </p>
                </td>
              </tr>
              ` : ''}
            </table>

            <p style="margin: 24px 0 0; color: #999; font-size: 12px;">
              Submitted: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
            </p>
          </div>
        </div>
      `,
    });

    if (emailError) {
      console.error('Resend error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send notification. Please try again.' },
        { status: 500 }
      );
    }

    // Log the submission
    console.log('Demand interest submitted:', {
      name,
      email,
      careHomeName,
      interestLevel: interestLevelLabel,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Demand interest submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit. Please try again.' },
      { status: 500 }
    );
  }
}
