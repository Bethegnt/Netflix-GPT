// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARtzFpgmDPwXoKdtdsMQ5qzfJHwqLHCDc",
  authDomain: "netflixgpt-app.firebaseapp.com",
  projectId: "netflixgpt-app",
  storageBucket: "netflixgpt-app.appspot.com",
  messagingSenderId: "255637406718",
  appId: "1:255637406718:web:65a29a9b6c52fc740c36af",
  measurementId: "G-1BBQJ58CM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();