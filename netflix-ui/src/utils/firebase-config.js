// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeMKp8yMn-p639nJi3SH19FrAcMYqfZ2A",
  authDomain: "react-netflix-clone-92b0c.firebaseapp.com",
  projectId: "react-netflix-clone-92b0c",
  storageBucket: "react-netflix-clone-92b0c.appspot.com",
  messagingSenderId: "935693103276",
  appId: "1:935693103276:web:a47769ba9f86faace32f09",
  measurementId: "G-PJ0SS89Q72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);