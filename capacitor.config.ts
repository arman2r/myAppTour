import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Xperyz',
  webDir: 'www',
  plugins: {
    GoogleMaps: {
      apiKey: 'AIzaSyDFJ0cpwr1wHdktxm9lzKBAp7AcYdy8Yag', // Reemplaza con tu API Key
    },
  },
};

export default config;
