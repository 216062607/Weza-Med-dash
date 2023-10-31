import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwyvazer3rfMRsN2V8tE49RxhuR7gLuGQ",
  authDomain: "login-auth-fcd0b.firebaseapp.com",
  projectId: "login-auth-fcd0b",
  storageBucket: "login-auth-fcd0b.appspot.com",
  messagingSenderId: "239551845280",
  appId: "1:239551845280:web:ed80420f205c16aecfcac5"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);