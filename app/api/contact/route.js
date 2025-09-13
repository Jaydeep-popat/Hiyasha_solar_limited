import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Contact from '@/lib/models/Contact';
import { sendNotificationEmail, sendConfirmationEmail } from '@/lib/emailService';

export async function POST(request) {
  let dbConnected = false;
  
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate the required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and phone are required fields' },
        { status: 400 }
      );
    }

    // Try to connect to the database, but continue even if it fails
    try {
      await dbConnect();
      dbConnected = true;
    } catch (dbError) {
      console.error('Database connection error:', dbError);
      // We'll continue without DB connection and just send emails
    }

    // Create a new contact entry if DB is connected
    let newContact = null;
    if (dbConnected) {
      try {
        newContact = await Contact.create({
          name,
          email,
          phone,
          message: message || '',
          requestType: 'Site Visit Request',
          status: 'New',
        });
      } catch (createError) {
        console.error('Error creating contact record:', createError);
        // Continue without saving to DB
      }
    }

    // Send email notifications
    try {
      console.log('Attempting to send emails...');
      
      // Send notification to company
      const notificationResult = await sendNotificationEmail({ name, email, phone, message });
      console.log('Notification email sent:', notificationResult.messageId);
      
      // Send confirmation to client
      const confirmationResult = await sendConfirmationEmail({ name, email, phone, message });
      console.log('Confirmation email sent:', confirmationResult.messageId);
      
    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      // Continue even if email fails, but log the error
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your request has been submitted successfully. We will contact you soon!',
        contact: newContact
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}
