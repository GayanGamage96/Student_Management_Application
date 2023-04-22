// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoYdXcU9n-w0rGIp-aVDsJh9XALdkyG6Y",
  authDomain: "studentmgtapplogin.firebaseapp.com",
  projectId: "studentmgtapplogin",
  storageBucket: "studentmgtapplogin.appspot.com",
  messagingSenderId: "1021422561170",
  appId: "1:1021422561170:web:fab0f678bd7ea94b73834b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);