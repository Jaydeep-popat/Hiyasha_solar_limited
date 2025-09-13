import { v2 as cloudinary } from 'cloudinary';
import ExcelJS from 'exceljs';
import nodemailer from 'nodemailer';
import dbConnect from '../db';
import Contact from '../models/Contact';
import path from 'path';
import fs from 'fs';
import os from 'os';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Email Transport
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_PORT === '465',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function backupSiteVisitRequests() {
  let tempFilePath;
  try {
    console.log('Starting monthly backup process...');
    
    // Connect to MongoDB
    await dbConnect();
    console.log('Connected to MongoDB successfully');
    
    // Fetch all records
    const records = await Contact.find({}).sort({ createdAt: 1 });
    console.log(`Found ${records.length} records to backup`);
    
    if (records.length === 0) {
      console.log('No records to backup, skipping process');
      return;
    }

    // Create Excel workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Site Visit Requests');

    // Add headers
    worksheet.columns = [
      { header: 'Name', key: 'name', width: 30 },
      { header: 'Email', key: 'email', width: 35 },
      { header: 'Phone', key: 'phone', width: 15 },
      { header: 'Message', key: 'message', width: 50 },
      { header: 'Request Type', key: 'requestType', width: 20 },
      { header: 'Status', key: 'status', width: 15 },
      { header: 'Created At', key: 'createdAt', width: 20 },
    ];

    // Style the header row
    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFE6F0E6' }, // Light green background
    };

    // Add data rows
    records.forEach((record) => {
      worksheet.addRow({
        name: record.name,
        email: record.email,
        phone: record.phone,
        message: record.message || '',
        requestType: record.requestType || 'Site Visit Request',
        status: record.status || 'New',
        createdAt: record.createdAt ? new Date(record.createdAt).toLocaleDateString('en-IN') : '',
      });
    });

    // Generate filename with date
    const date = new Date();
    const filename = `site-visit-requests-${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}.xlsx`;
    tempFilePath = path.join(os.tmpdir(), filename);

    // Save workbook
    await workbook.xlsx.writeFile(tempFilePath);
    console.log('Excel file created successfully');

    // Upload to Cloudinary
    const cloudinaryResponse = await cloudinary.uploader.upload(tempFilePath, {
      resource_type: 'raw',
      public_id: `site-visit-backups/${path.parse(filename).name}`,
      folder: 'site-visit-backups',
      tags: ['site-visit-backup', `month-${date.getMonth() + 1}`, `year-${date.getFullYear()}`],
      use_filename: true,
      unique_filename: true,
      overwrite: false
    });

    console.log('File uploaded to Cloudinary successfully');

    // Send email notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'Monthly Site Visit Requests Backup',
      html: `
        <h2>Monthly Backup Complete</h2>
        <p>The site visit requests for ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()} have been backed up.</p>
        <p><strong>Total Records:</strong> ${records.length}</p>
        <p><strong>Backup File:</strong> <a href="${cloudinaryResponse.secure_url}">${filename}</a></p>
        <p>The backup file has been stored securely in Cloudinary and all records have been cleared from the database.</p>
      `,
    });

    console.log('Notification email sent successfully');

    // Delete records from database
    await Contact.deleteMany({});
    console.log('Records deleted from database successfully');

    // Cleanup
    if (tempFilePath && fs.existsSync(tempFilePath)) {
      fs.unlinkSync(tempFilePath);
      console.log('Temporary file cleaned up');
    }

    console.log('Database connection closed');
    console.log('Backup process completed successfully');

  } catch (error) {
    console.error('Error during backup process:', error);
    
    // Send error notification
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: '⚠️ Monthly Backup Process Failed',
        html: `
          <h2>Backup Process Failed</h2>
          <p>The monthly backup process encountered an error:</p>
          <pre>${error.message}</pre>
          <p>Please check the server logs for more details.</p>
        `,
      });
    } catch (emailError) {
      console.error('Error sending error notification:', emailError);
    }

    // Database connection will be handled by mongoose connection pooling

    throw error;
  }
}
