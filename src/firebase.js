// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGSCexFp8sCksi2X0GUe9neYYDwHq8q5k",
  authDomain: "what-s-up-omar.firebaseapp.com",
  projectId: "what-s-up-omar",
  storageBucket: "what-s-up-omar.appspot.com",
  messagingSenderId: "65930982062",
  appId: "1:65930982062:web:c43c195b5ebaf1d462733f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)