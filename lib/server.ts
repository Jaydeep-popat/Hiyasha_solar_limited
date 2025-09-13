import { setupBackupCron } from './services/cronScheduler';

export function initializeServer() {
  // Initialize cron jobs
  setupBackupCron();
}
