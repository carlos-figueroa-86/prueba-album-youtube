// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import CONSTS from "./constans";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: CONSTS.FIREBASE.apiKey,
  authDomain: CONSTS.FIREBASE.authDomain,
  projectId: CONSTS.FIREBASE.projectId,
  storageBucket: CONSTS.FIREBASE.storageBucket,
  messagingSenderId: CONSTS.FIREBASE.messagingSenderId,
  appId: CONSTS.FIREBASE.appId,
  measurementId: CONSTS.FIREBASE.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }