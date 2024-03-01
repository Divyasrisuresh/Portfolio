// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAyE0JPp8GJbxLqd-YVP3eicFOt7OG-0Y",
  authDomain: "myportfolio-1fee6.firebaseapp.com",
  projectId: "myportfolio-1fee6",
  storageBucket: "myportfolio-1fee6.appspot.com",
  messagingSenderId: "640429292878",
  appId: "1:640429292878:web:2c7c961dc17f50b90b721f",
  measurementId: "G-LY0969TV6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);