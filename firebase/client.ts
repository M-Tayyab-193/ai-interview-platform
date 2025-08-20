// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDb1hVY5mmp4sO8GC1cKgXDD08BSS6rpFo",
  authDomain: "neuroprep-ea007.firebaseapp.com",
  projectId: "neuroprep-ea007",
  storageBucket: "neuroprep-ea007.firebasestorage.app",
  messagingSenderId: "416763871625",
  appId: "1:416763871625:web:732cf04f204f3bc98fe158",
  measurementId: "G-CBM9N0Z0HP"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
