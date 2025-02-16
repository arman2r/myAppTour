import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Xperyz',
  webDir: 'www',
  plugins: {
    GoogleMaps: {
      apiKey: 'AIzaSyAn3ZPXLhSIQlAHuA3blxzD_mQYygvo3t4', // Reemplaza con tu API Key
    },
  },
};

export default config;
