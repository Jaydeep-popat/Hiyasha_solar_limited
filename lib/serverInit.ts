import { setupBackupCron } from './services/cronScheduler';

// This function should be called from a server-side context
export function initializeServer() {
  // Only initialize in production or when explicitly called
  if (process.env.NODE_ENV === 'production') {
    console.log('Initializing server-side features...');
    setupBackupCron();
  }
}

// Auto-initialize when this module is imported in server context
if (typeof window === 'undefined') {
  initializeServer();
}
