import { NextResponse } from 'next/server';
import { setupBackupCron } from '@/lib/services/cronScheduler';

export async function POST() {
  try {
    setupBackupCron();
    return NextResponse.json({ 
      success: true, 
      message: 'Cron job initialized successfully' 
    });
  } catch (error) {
    console.error('Failed to initialize cron job:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to initialize cron job' },
      { status: 500 }
    );
  }
}
