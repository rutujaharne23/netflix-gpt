// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfxNkchw1ojlmkLxH3x8Ql0bC3VFn3ydU",
  authDomain: "netflixgpt-198ec.firebaseapp.com",
  projectId: "netflixgpt-198ec",
  storageBucket: "netflixgpt-198ec.appspot.com",
  messagingSenderId: "507124899161",
  appId: "1:507124899161:web:030ee7d8b495dc4a80c048",
  measurementId: "G-XC130WVEPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);