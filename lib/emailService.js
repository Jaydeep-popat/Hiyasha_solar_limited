import nodemailer from 'nodemailer';
import formatEmailContent, { formatConfirmationEmail } from './emailTemplates';

// Create a transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email transporter verification failed:', error);
  } else {
    console.log('Email transporter is ready to send messages');
  }
});

/**
 * Send email notification to the company employee
 * @param {Object} data - Form data from the client
 */
export async function sendNotificationEmail(data) {
  const mailOptions = {
    from: `"Hiyasha Solar Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // Send to company email
    subject: 'New Site Visit Consultation Request',
    html: formatEmailContent(data),
  };

  return transporter.sendMail(mailOptions);
}

/**
 * Send confirmation email to the client
 * @param {Object} data - Form data from the client
 */
export async function sendConfirmationEmail(data) {
  const mailOptions = {
    from: `"Hiyasha Solar Systems" <${process.env.EMAIL_USER}>`,
    to: data.email, // Send to client's email
    subject: 'Your Site Visit Consultation Request - Hiyasha Solar Systems',
    html: formatConfirmationEmail(data),
  };

  return transporter.sendMail(mailOptions);
}

export default { sendNotificationEmail, sendConfirmationEmail };
