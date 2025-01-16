import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const sendEmail = async (
  to: string, 
  subject: string, 
  token: string,
  email : string
) => {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.APP_EMAIL, 
      pass: process.env.APP_PASS,   
    },
  });

  // Opsi email
  const mailOptions = {
    from: 'api@helsense.com', 
    to,                          
    subject,                                     
    html: (`<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verify Your Email Address</title>
        <style>
            body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            }
            .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .email-header {
            background-color: #4CAF50;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 24px;
            }
            .email-body {
            padding: 20px;
            color: #333333;
            line-height: 1.6;
            }
            .email-body h1 {
            font-size: 22px;
            color: #4CAF50;
            margin-bottom: 20px;
            }
            .email-body p {
            margin-bottom: 20px;
            }
            .button {
            display: inline-block;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 16px;
            width: 100%;
            text-align: center;
            }
            .button:hover {
            background-color: #45a049;
            }
            .email-footer {
            background-color: #f4f4f4;
            padding: 10px;
            text-align: center;
            color: #888888;
            font-size: 14px;
            }
            @media (max-width: 600px) {
            .email-header, .email-body, .email-footer {
                padding: 10px;
            }
            .button {
                color:white;
                width: 100%;
                text-align: center;
            }
            }
        </style>
        </head>
        <body>
        <div class="email-container">
            <div class="email-header">
            <h6>Helsense</h6>
            </div>
            <div class="email-body">
            <h1>Verify Your Email Address</h1>
            <p>Hi there,</p>
            <p>We're excited to have you on board! To complete your registration, please enter the following verification code:</p>
            <p><strong>${token}</strong></p>
            <p>If you didn't request this, please ignore this email. Your email address will not be added to our system.</p>
            <a href="${process.env.BASE_URL}/auth/verify/${email}/${token}" class="button">Verify Email Address</a>
            <p>If you have any questions, feel free to <a href="mailto:support@example.com">contact us</a>.</p>
            </div>
            <div class="email-footer">
            <p>Best regards,</p>
            <p>The Helsense Team</p>
            <p><a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a></p>
            </div>
        </div>
        </body>
        </html>`)                  
  };

  try {
    const info = await transporter.sendMail(mailOptions);
  
    return info.response
    
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; 
  }
};

export default sendEmail;