const CONSTS = {
  YOUTUBE: {
    URL: 'https://www.googleapis.com/youtube/v3/videos',
    API_KEY: process.env.VUE_APP_API_KEY,
  },
  FIREBASE: {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
    measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
  },
  NAME_COLLECTION: process.env.VUE_APP_FIREBASE_NAME_COLLENTION,
};

export default CONSTS;