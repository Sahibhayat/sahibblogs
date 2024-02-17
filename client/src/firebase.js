// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-62bf5.firebaseapp.com",
  projectId: "mern-blog-62bf5",
  storageBucket: "mern-blog-62bf5.appspot.com",
  messagingSenderId: "659716373700",
  appId: "1:659716373700:web:dc78fa01813ddf4d49dd91"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);