export default function formatEmailContent(data) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="color: #4CAF50; margin: 0;">Hiyasha Solar Systems LLP</h2>
        <p style="color: #666; font-size: 14px; margin: 5px 0;">F-46 Capital Market, Ravapar Rd, Morbi, Gujarat 363641</p>
      </div>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
        <h3 style="color: #333; margin-top: 0;">New Site Visit Request</h3>
        <p style="color: #666; font-size: 14px;">A new site visit consultation request has been submitted with the following details:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Email:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${data.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Phone:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${data.phone}</td>
          </tr>
          ${data.message ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Message:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${data.message}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #555;">Submission Date:</td>
            <td style="padding: 8px;">${new Date().toLocaleString()}</td>
          </tr>
        </table>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
        <p style="color: #888; font-size: 12px; margin: 5px 0;">
          This is an automated email notification. Please do not reply to this email.
        </p>
        <p style="color: #888; font-size: 12px; margin: 5px 0;">
          &copy; 2025 Hiyasha Solar Systems LLP. All rights reserved.
        </p>
      </div>
    </div>
  `;
}

export function formatConfirmationEmail(data) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="color: #4CAF50; margin: 0;">Hiyasha Solar Systems LLP</h2>
        <p style="color: #666; font-size: 14px; margin: 5px 0;">F-46 Capital Market, Ravapar Rd, Morbi, Gujarat 363641</p>
      </div>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
        <h3 style="color: #333; margin-top: 0;">Thank You for Your Request!</h3>
        <p style="color: #666; font-size: 14px;">Dear ${data.name},</p>
        <p style="color: #666; font-size: 14px;">Thank you for requesting a free site visit consultation with Hiyasha Solar Systems. We have received your request and our team will contact you shortly to schedule your consultation.</p>
        
        <div style="background-color: #edf7ed; border-left: 4px solid #4CAF50; padding: 12px; margin: 15px 0;">
          <p style="color: #333; font-size: 14px; margin: 0;">One of our solar experts will call you within 24 business hours to discuss your requirements and schedule the site visit.</p>
        </div>
        
        <p style="color: #666; font-size: 14px;">Here's a summary of your request:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Email:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${data.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Phone:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${data.phone}</td>
          </tr>
          ${data.message ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #555;">Message:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${data.message}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #555;">Request Date:</td>
            <td style="padding: 8px;">${new Date().toLocaleString()}</td>
          </tr>
        </table>
      </div>
      
      <div style="margin-top: 20px;">
        <p style="color: #666; font-size: 14px;">If you have any questions before your scheduled visit, please feel free to contact us:</p>
        <ul style="color: #666; font-size: 14px;">
          <li>Phone: +91 97270 97250 (Hemalbhai Pethapara)</li>
          <li>Email: hiyashasolarsystems@gmail.com</li>
        </ul>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
        <p style="color: #888; font-size: 12px; margin: 5px 0;">
          This is an automated confirmation email. Please do not reply to this email.
        </p>
        <p style="color: #888; font-size: 12px; margin: 5px 0;">
          &copy; 2025 Hiyasha Solar Systems LLP. All rights reserved.
        </p>
      </div>
    </div>
  `;
}
