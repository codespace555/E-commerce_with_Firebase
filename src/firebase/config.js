const conf = {
  apiKey: String(import.meta.env.VITE_API_KEY),
  authDomain: String(import.meta.env.VITE_AUTH_DOMAIN),
  projectId: String(import.meta.env.VITE_PROJECT_ID),
  storageBucket: String(import.meta.env.VITE_BUCKET_ID),
  messagingSenderId: String(import.meta.env.VITE_MESSAGINGSENDER_ID),
  appId: String(import.meta.env.VITE_APP_ID),
  measurementId: String(import.meta.env.vITE_MEASUREMENT_ID),
};

export default conf;
