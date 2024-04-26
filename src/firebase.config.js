// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeMZzEZazJMhQJNrxU7LJz9BLCjs-16BQ",
  authDomain: "coffee-store-5b966.firebaseapp.com",
  projectId: "coffee-store-5b966",
  storageBucket: "coffee-store-5b966.appspot.com",
  messagingSenderId: "905181605789",
  appId: "1:905181605789:web:cd3caef67810e38de0c974"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;