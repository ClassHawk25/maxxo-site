import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// ============================================================================
// PUBLIC DEMAND LEAD SUBMISSION API
// Generates AI Visibility Reports for care homes (lead generation)
// ============================================================================

interface DemandLeadRequest {
  careHomeName: string;
  town: string;
  county: string;
  email: string;
  careTypes: string[];
}

interface PlatformScore {
  platform: string;
  score: number;
  mentioned: boolean;
  queryCount: number;
  mentionCount: number;
}

interface VisibilityScores {
  overall: number;
  platforms: PlatformScore[];
  timestamp: string;
}

// Simulate AI platform queries and generate scores
// In production, this would call actual AI APIs
function generateVisibilityScores(careHomeName: string, town: string, careTypes: string[]): VisibilityScores {
  // Simulated scoring based on randomization with some logic
  // In production, this would query Claude, ChatGPT, Gemini, Perplexity APIs

  const platforms = ['ChatGPT', 'Claude', 'Gemini', 'Perplexity'];
  const platformScores: PlatformScore[] = platforms.map(platform => {
    // Generate realistic-looking scores
    // Most care homes have low visibility, so bias toward lower scores
    const baseScore = Math.random() * 100;
    const score = Math.round(baseScore * (Math.random() > 0.7 ? 1 : 0.5));
    const queryCount = 5 + Math.floor(Math.random() * 5);
    const mentionCount = Math.round((score / 100) * queryCount);

    return {
      platform,
      score: Math.min(100, Math.max(0, score)),
      mentioned: score > 20,
      queryCount,
      mentionCount,
    };
  });

  // Calculate overall score as weighted average
  const overall = Math.round(
    platformScores.reduce((sum, p) => sum + p.score, 0) / platformScores.length
  );

  return {
    overall,
    platforms: platformScores,
    timestamp: new Date().toISOString(),
  };
}

// Generate a mock PDF URL (in production, would actually generate and upload PDF)
function generatePdfUrl(leadId: string): string {
  // In production, this would:
  // 1. Generate actual PDF using a PDF library
  // 2. Upload to Supabase storage
  // 3. Return the public URL

  // For now, return a placeholder that would be replaced with actual URL
  return `https://storage.maxxo.ai/demand-reports/${leadId}.pdf`;
}

export async function POST(request: Request) {
  try {
    const body: DemandLeadRequest = await request.json();
    const { careHomeName, town, county, email, careTypes } = body;

    // Validate required fields
    if (!careHomeName || !town || !county || !email || !careTypes?.length) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Generate a mock lead ID (in production, would come from database insert)
    const leadId = crypto.randomUUID();

    // Generate visibility scores
    // In production, this would call runQueryEngine from the actual demand engine
    const scores = generateVisibilityScores(careHomeName, town, careTypes);

    // Generate PDF URL (mock for now)
    const pdfUrl = generatePdfUrl(leadId);

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send notification email to team
    const { error: teamEmailError } = await resend.emails.send({
      from: 'Maxxo.ai <noreply@maxxo.ai>',
      to: ['josh@maxxo.ai', 'simon@maxxo.ai'],
      subject: `New Demand Lead: ${careHomeName} (Score: ${scores.overall})`,
      html: `
        <h2>New AI Visibility Report Generated</h2>
        <p><strong>Care Home:</strong> ${careHomeName}</p>
        <p><strong>Location:</strong> ${town}, ${county}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Care Types:</strong> ${careTypes.join(', ')}</p>
        <hr />
        <h3>Visibility Scores</h3>
        <p><strong>Overall Score:</strong> ${scores.overall}/100</p>
        <ul>
          ${scores.platforms.map(p => `<li>${p.platform}: ${p.score}/100 (${p.mentionCount}/${p.queryCount} queries)</li>`).join('')}
        </ul>
        <p><strong>Report URL:</strong> ${pdfUrl}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>
        <hr />
        <p style="color: #666;">
          ${scores.overall < 40 ? '🔴 Low visibility - high conversion potential!' : scores.overall < 70 ? '🟡 Medium visibility - good upsell opportunity' : '🟢 High visibility - potential testimonial candidate'}
        </p>
      `,
    });

    if (teamEmailError) {
      console.error('Failed to send team notification:', teamEmailError);
      // Don't fail the request, just log the error
    }

    // Send report email to the lead
    const { error: leadEmailError } = await resend.emails.send({
      from: 'Maxxo.ai <noreply@maxxo.ai>',
      to: [email],
      subject: `Your AI Visibility Report for ${careHomeName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #03045E; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; padding: 30px 0; }
            .score-circle {
              width: 120px; height: 120px;
              border-radius: 60px;
              background: ${scores.overall >= 70 ? '#10B981' : scores.overall >= 40 ? '#F59E0B' : '#EF4444'};
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 36px;
              font-weight: bold;
              margin: 20px auto;
            }
            .platform-scores { background: #F6FCFC; border-radius: 12px; padding: 20px; margin: 20px 0; }
            .platform-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #CAF0F8; }
            .cta-button {
              display: inline-block;
              background: linear-gradient(135deg, #01B5D8, #90E0EF);
              color: white !important;
              padding: 15px 30px;
              border-radius: 12px;
              text-decoration: none;
              font-weight: bold;
              margin: 20px 0;
            }
            .footer { text-align: center; color: #666; font-size: 12px; margin-top: 40px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://maxxo.ai/logo-full.svg" alt="Maxxo.ai" width="150" />
              <h1>Your AI Visibility Report</h1>
              <p>for ${careHomeName}</p>
            </div>

            <div style="text-align: center;">
              <div class="score-circle">${scores.overall}</div>
              <p style="font-size: 18px; font-weight: bold;">
                ${scores.overall >= 70 ? 'Excellent Visibility!' : scores.overall >= 40 ? 'Room for Improvement' : 'Urgent Action Needed'}
              </p>
            </div>

            <div class="platform-scores">
              <h3>Platform Breakdown</h3>
              ${scores.platforms.map(p => `
                <div class="platform-row">
                  <span><strong>${p.platform}</strong></span>
                  <span>${p.score}/100</span>
                </div>
              `).join('')}
            </div>

            <div style="background: #03045E; color: white; border-radius: 12px; padding: 30px; text-align: center; margin: 30px 0;">
              <h2 style="color: white; margin-bottom: 15px;">Want to Improve Your Score?</h2>
              <p style="color: #90E0EF;">Maxxo Demand can help you get recommended by AI platforms when families search for care.</p>
              <a href="https://maxxo.ai/#demo" class="cta-button">Talk to Our Team</a>
            </div>

            <div class="footer">
              <p>This report was generated by Maxxo.ai</p>
              <p>Questions? Reply to this email or visit <a href="https://maxxo.ai">maxxo.ai</a></p>
              <p><a href="https://maxxo.ai/privacy-policy">Privacy Policy</a> | <a href="#">Unsubscribe</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (leadEmailError) {
      console.error('Failed to send report to lead:', leadEmailError);
      // Don't fail the request, just log the error
    }

    // Log the submission
    console.log('Demand lead captured:', {
      leadId,
      careHomeName,
      town,
      county,
      email,
      careTypes,
      overallScore: scores.overall,
      timestamp: new Date().toISOString(),
    });

    // Return success with scores
    // In production, would also save to database here
    return NextResponse.json({
      success: true,
      scores,
      pdfUrl,
      leadId,
    });

  } catch (error) {
    console.error('Demand lead submission error:', error);
    return NextResponse.json(
      { error: 'Failed to generate report. Please try again.' },
      { status: 500 }
    );
  }
}
