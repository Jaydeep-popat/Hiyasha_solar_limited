import { NextResponse } from 'next/server';
import { backupSiteVisitRequests } from '@/lib/services/backupService';

export async function POST() {
  try {
    console.log('Manual backup triggered...');
    await backupSiteVisitRequests();
    return NextResponse.json({ 
      success: true,
      message: 'Backup completed successfully' 
    });
  } catch (error) {
    console.error('Manual backup failed:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Backup process failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
