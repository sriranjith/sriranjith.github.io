import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.paradox.app',
  appName: 'Paradox',
  webDir: 'dist',
  server: {
    // Use local file assets (no remote URL) for offline support
    androidScheme: 'https',
  },
  android: {
    backgroundColor: '#fdfcfa',
  },
};

export default config;
