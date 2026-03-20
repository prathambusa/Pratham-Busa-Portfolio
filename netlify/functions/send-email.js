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
    // Parse FormData instead of JSON
    const formData = event.body;
    const parts = formData.split('------');
    
    let name, email, project, fileData, fileName, fileType;
    
    for (const part of parts) {
      if (part.includes('name="name"')) {
        name = part.split('\r\n\r\n')[1]?.trim();
      } else if (part.includes('name="email"')) {
        email = part.split('\r\n\r\n')[1]?.trim();
      } else if (part.includes('name="project"')) {
        project = part.split('\r\n\r\n')[1]?.trim();
      } else if (part.includes('name="file"')) {
        const lines = part.split('\r\n');
        const contentIndex = lines.findIndex(line => line === '') + 1;
        const content = lines.slice(contentIndex, -2).join('\r\n');
        fileData = Buffer.from(content, 'binary');
        fileName = part.match(/filename="(.+)"/)?.[1] || 'attachment';
        fileType = part.match(/Content-Type: (.+)/)?.[1] || 'application/octet-stream';
      }
    }

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
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Project: ${project}
${fileData ? `\nAttachment: ${fileName}` : ''}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project:</strong></p>
        <p>${project}</p>
        ${fileData ? `<p><strong>Attachment:</strong> ${fileName}</p>` : ''}
      `,
      attachments: fileData ? [{
        filename: fileName,
        content: fileData,
        contentType: fileType
      }] : []
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
