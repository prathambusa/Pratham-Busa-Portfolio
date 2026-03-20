import nodemailer from 'nodemailer';

// These will be set in Netlify environment variables
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const TO_EMAIL = process.env.TO_EMAIL;

export const handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse JSON payload
    const { name, email, project, file } = JSON.parse(event.body);

    console.log('Received data:', { name, email, project, file: file ? { name: file.name, type: file.type, size: file.size, dataLength: file.data?.length } : null });

    // Validate input
    if (!name || !email || !project) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'All fields are required' })
      };
    }

    // Create transporter (using Gmail as example)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    });

    // Email options
    const mailOptions = {
      from: EMAIL_USER,
      to: TO_EMAIL,
      subject: `📬 New Contact: ${name} - Portfolio Inquiry`,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Project Details:
${project}
${file ? `\nAttachment: ${file.name} (${(file.size / 1024).toFixed(1)}KB)` : ''}
---
Sent from: Pratham Busa Portfolio Website
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden; margin-top: 20px; margin-bottom: 20px;">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #374151 100%); padding: 30px 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                📬 New Contact Inquiry
              </h1>
              <p style="color: #d1d5db; margin: 10px 0 0 0; font-size: 16px;">
                From your portfolio website
              </p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px;">
              <div style="background-color: #f9fafb; border-radius: 8px; padding: 25px; margin-bottom: 30px; border-left: 4px solid #1f2937;">
                <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px; font-weight: 600;">
                  Contact Information
                </h2>
                
                <div style="display: grid; grid-template-columns: 120px 1fr; gap: 15px; align-items: center;">
                  <div style="color: #6b7280; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                    Name
                  </div>
                  <div style="color: #1f2937; font-size: 16px; font-weight: 500;">
                    ${name}
                  </div>
                  
                  <div style="color: #6b7280; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                    Email
                  </div>
                  <div style="color: #1f2937; font-size: 16px; font-weight: 500;">
                    <a href="mailto:${email}" style="color: #1f2937; text-decoration: none; border-bottom: 1px solid #d1d5db; padding-bottom: 1px;">${email}</a>
                  </div>
                </div>
              </div>
              
              <div style="margin-bottom: 30px;">
                <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px; font-weight: 600;">
                  Project Details
                </h2>
                <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; line-height: 1.6;">
                  <p style="color: #374151; margin: 0; font-size: 16px; white-space: pre-wrap;">${project}</p>
                </div>
              </div>
              
              ${file ? `
              <div style="background-color: #eff6ff; border-radius: 8px; padding: 20px; border-left: 4px solid #3b82f6;">
                <div style="display: flex; align-items: center; gap: 15px;">
                  <div style="background-color: #3b82f6; color: white; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px;">
                    📎
                  </div>
                  <div>
                    <h3 style="color: #1e40af; margin: 0 0 5px 0; font-size: 16px; font-weight: 600;">
                      File Attachment
                    </h3>
                    <p style="color: #374151; margin: 0; font-size: 14px;">
                      ${file.name} (${(file.size / 1024).toFixed(1)}KB)
                    </p>
                  </div>
                </div>
              </div>
              ` : ''}
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f9fafb; padding: 30px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; margin: 0 0 10px 0; font-size: 14px;">
                This message was sent from your portfolio website
              </p>
              <p style="color: #9ca3af; margin: 0; font-size: 12px;">
                Sent on ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
            
          </div>
        </body>
        </html>
      `,
      attachments: file ? [{
        filename: file.name,
        content: (() => {
          try {
            console.log('Converting base64 to buffer, data length:', file.data.length);
            const buffer = Buffer.from(file.data, 'base64');
            console.log('Buffer created, length:', buffer.length);
            return buffer;
          } catch (error) {
            console.error('Error converting base64 to buffer:', error);
            return null;
          }
        })(),
        contentType: file.type
      }].filter(att => att.content !== null) : []
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true,
        message: 'Email sent successfully' 
      })
    };

  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to send email',
        details: error.message 
      })
    };
  }
};
