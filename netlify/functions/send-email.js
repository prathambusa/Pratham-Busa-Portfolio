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
    // Parse FormData using built-in parser
    const contentType = event.headers['content-type'];
    
    if (!contentType || !contentType.includes('multipart/form-data')) {
      // Fallback to JSON parsing for backward compatibility
      const { name, email, project } = JSON.parse(event.body);
      
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

      // Email options (no file attachment)
      const mailOptions = {
        from: EMAIL_USER,
        to: TO_EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        text: `
Name: ${name}
Email: ${email}
Project: ${project}
        `,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project:</strong></p>
          <p>${project}</p>
        `
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
    }

    // For multipart form data, we need to use a different approach
    // Since Netlify functions don't have built-in FormData parsing,
    // we'll use a simpler approach that works reliably
    
    // Extract boundary from content type
    const boundary = contentType.split('boundary=')[1];
    const parts = event.body.split(`--${boundary}`);
    
    let name, email, project, fileData, fileName, fileType;
    
    for (const part of parts) {
      if (part.includes('name="name"') && part.includes('\r\n\r\n')) {
        const contentStart = part.indexOf('\r\n\r\n') + 4;
        const contentEnd = part.lastIndexOf('\r\n');
        name = part.substring(contentStart, contentEnd).trim();
      } else if (part.includes('name="email"') && part.includes('\r\n\r\n')) {
        const contentStart = part.indexOf('\r\n\r\n') + 4;
        const contentEnd = part.lastIndexOf('\r\n');
        email = part.substring(contentStart, contentEnd).trim();
      } else if (part.includes('name="project"') && part.includes('\r\n\r\n')) {
        const contentStart = part.indexOf('\r\n\r\n') + 4;
        const contentEnd = part.lastIndexOf('\r\n');
        project = part.substring(contentStart, contentEnd).trim();
      } else if (part.includes('name="file"') && part.includes('filename=')) {
        fileName = part.match(/filename="(.+)"/)?.[1] || 'attachment';
        fileType = part.match(/Content-Type: (.+)/)?.[1] || 'application/octet-stream';
        
        const contentStart = part.indexOf('\r\n\r\n') + 4;
        const contentEnd = part.lastIndexOf('\r\n');
        const content = part.substring(contentStart, contentEnd);
        
        if (content) {
          fileData = Buffer.from(content, 'binary');
        }
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
