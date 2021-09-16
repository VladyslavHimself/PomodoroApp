import {initializeApp} from "firebase/firebase-app";
import {getAnalytics} from "firebase/firebase-analytics";
import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyDCxrSUvyDs3qXPDhr57VVV2UZlSNihT0A",
  authDomain: "pomdoro-app.firebaseapp.com",
  projectId: "pomdoro-app",
  storageBucket: "pomdoro-app.appspot.com",
  messagingSenderId: "284979268168",
  appId: "1:284979268168:web:f25e921fa973a60b18e67d",
  measurementId: "G-K4TZGFC9LR"
};
const app = initializeApp(firebaseConfig);

export const db = firebase.firestore();