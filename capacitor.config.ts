import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'blood-donation-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
