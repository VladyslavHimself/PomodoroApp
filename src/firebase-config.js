import { initializeApp } from "firebase/app";
import 'firebase/auth';

export const app = initializeApp({
  apiKey: "AIzaSyDCxrSUvyDs3qXPDhr57VVV2UZlSNihT0A",
  authDomain: "pomdoro-app.firebaseapp.com",
  projectId: "pomdoro-app",
  storageBucket: "pomdoro-app.appspot.com",
  messagingSenderId: "284979268168",
  appId: "1:284979268168:web:f25e921fa973a60b18e67d",
  measurementId: "G-K4TZGFC9LR"
});

export default app;