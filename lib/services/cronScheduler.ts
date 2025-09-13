import cron from 'node-cron';
import { backupSiteVisitRequests } from './backupService';

export function setupBackupCron() {
  // Schedule task to run at 2 AM on the 1st of every month
  cron.schedule('0 2 1 * *', async () => {
    console.log('Starting scheduled backup task...');
    try {
      await backupSiteVisitRequests();
      console.log('Scheduled backup completed successfully');
    } catch (error) {
      console.error('Scheduled backup failed:', error);
    }
  }, {
    scheduled: true,
    timezone: "Asia/Kolkata" // Set to Indian timezone
  });

  console.log('Backup cron job scheduled successfully');
}
