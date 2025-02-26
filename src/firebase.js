// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxrclYdV5YtcThU4aJHIeCq3xrSZNZIMc",
  authDomain: "wealthdistributionprojec-41706.firebaseapp.com",
  projectId: "wealthdistributionprojec-41706",
  storageBucket: "wealthdistributionprojec-41706.firebasestorage.app",
  messagingSenderId: "110545821699",
  appId: "1:110545821699:web:fe460905d7c4c66b8c6e36",
  measurementId: "G-92Q547KVH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };