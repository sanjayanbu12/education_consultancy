import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, course, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }


    // Email to admin (Al-Huda) - THIS IS THE MAIN EMAIL
    const adminMailOptions = {
      from: `"Al-Huda Contact Form" <${process.env.GMAIL_USER}>`,
      to: 'sanjayanbazhagan@gmail.com', // Main recipient
      replyTo: email, // Customer's email for easy reply
      subject: `🎓 New Contact Form - ${name} - ${course || 'General Inquiry'}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #0E74D2 0%, #0a5ba8 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f8fafc;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-radius: 8px;
                border-left: 4px solid #0E74D2;
              }
              .field-label {
                font-weight: bold;
                color: #1a365d;
                margin-bottom: 5px;
                font-size: 14px;
              }
              .field-value {
                color: #4a5568;
                font-size: 16px;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                padding-top: 20px;
                border-top: 2px solid #e2e8f0;
                color: #718096;
                font-size: 14px;
              }
              .alert-box {
                background: #fef3c7;
                border-left: 4px solid #f59e0b;
                padding: 15px;
                border-radius: 8px;
                margin-bottom: 20px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 28px;">🎓 New Contact Form Submission</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Al-Huda Educational Consultant</p>
              </div>
              <div class="content">
                <div class="alert-box">
                  <strong>⚡ New Lead Alert!</strong> A potential student has contacted you.
                </div>

                <div class="field">
                  <div class="field-label">👤 Student Name:</div>
                  <div class="field-value"><strong>${name}</strong></div>
                </div>
                
                <div class="field">
                  <div class="field-label">📧 Email Address:</div>
                  <div class="field-value"><a href="mailto:${email}" style="color: #0E74D2; text-decoration: none;">${email}</a></div>
                </div>
                
                <div class="field">
                  <div class="field-label">📱 Phone Number:</div>
                  <div class="field-value"><a href="tel:${phone}" style="color: #0E74D2; text-decoration: none; font-size: 18px; font-weight: bold;">${phone}</a></div>
                </div>
                
                <div class="field">
                  <div class="field-label">🎯 Interested Course:</div>
                  <div class="field-value"><strong>${course || 'Not specified'}</strong></div>
                </div>
                
                ${message ? `
                  <div class="field">
                    <div class="field-label">💬 Message:</div>
                    <div class="field-value" style="white-space: pre-wrap;">${message}</div>
                  </div>
                ` : ''}
                
                <div class="footer">
                  <p><strong>Action Required:</strong> Please follow up with this inquiry within 24 hours.</p>
                  <p style="margin-top: 10px;">📅 Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                  <p style="margin-top: 10px; font-size: 12px; color: #94a3b8;">This email was sent from your website contact form at alhudaedu.com</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Send email to admin first (MOST IMPORTANT)
    const adminResult = await transporter.sendMail(adminMailOptions);
    console.log('✅ Admin email sent successfully:', adminResult.messageId);

    // Auto-reply to customer (SECONDARY)
    try {
      const customerMailOptions = {
        from: `"Al-Huda Educational Consultant" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: 'Thank you for contacting Al-Huda Educational Consultant',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  color: #333;
                }
                .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                }
                .header {
                  background: linear-gradient(135deg, #0E74D2 0%, #0a5ba8 100%);
                  color: white;
                  padding: 30px;
                  border-radius: 10px 10px 0 0;
                  text-align: center;
                }
                .content {
                  background: #f8fafc;
                  padding: 30px;
                  border-radius: 0 0 10px 10px;
                }
                .button {
                  display: inline-block;
                  padding: 12px 30px;
                  background: #0E74D2;
                  color: white !important;
                  text-decoration: none;
                  border-radius: 8px;
                  margin-top: 20px;
                }
                .highlight {
                  background: white;
                  padding: 15px;
                  border-radius: 8px;
                  border-left: 4px solid #0E74D2;
                  margin: 20px 0;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">✅ Message Received!</h1>
                </div>
                <div class="content">
                  <p>Dear ${name},</p>
                  <p>Thank you for contacting <strong>Al-Huda Educational Consultant</strong>. We have received your inquiry and our team will get back to you within 24 hours.</p>
                  
                  <div class="highlight">
                    <p style="margin: 0;"><strong>Your submission details:</strong></p>
                    <ul style="margin: 10px 0 0 0; padding-left: 20px;">
                      <li><strong>Course Interest:</strong> ${course || 'General Inquiry'}</li>
                      <li><strong>Phone:</strong> ${phone}</li>
                      <li><strong>Email:</strong> ${email}</li>
                    </ul>
                  </div>
                  
                  <p>In the meantime, if you have any urgent questions, please feel free to call us at:</p>
                  <p style="font-size: 24px; color: #0E74D2; font-weight: bold; text-align: center; margin: 20px 0;">+91 9578599785</p>
                  
                  <p>We're available <strong>24/7</strong> to assist you with your educational goals and admission process.</p>
                  
                  <div style="text-align: center;">
                    <a href="tel:+919578599785" class="button">📞 Call Us Now</a>
                  </div>
                  
                  <p style="margin-top: 30px; border-top: 2px solid #e2e8f0; padding-top: 20px;">
                    Best regards,<br>
                    <strong>Al-Huda Educational Consultant Team</strong><br>
                    <small style="color: #718096;">Coimbatore, Tamil Nadu</small>
                  </p>
                </div>
              </div>
            </body>
          </html>
        `,
      };

      const customerResult = await transporter.sendMail(customerMailOptions);
      console.log('✅ Customer auto-reply sent successfully:', customerResult.messageId);
    } catch (autoReplyError) {
      // Don't fail the whole request if auto-reply fails
      console.error('⚠️ Auto-reply failed (not critical):', autoReplyError);
    }

    return NextResponse.json({ 
      success: true,
      message: 'Email sent successfully to admin and customer' 
    });
  } catch (error) {
    console.error('❌ Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}