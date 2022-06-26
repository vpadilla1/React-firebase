// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3Xk4907wr6ehY_qIs-e9mqBuv6ZNeOLU",
  authDomain: "sistema-f.firebaseapp.com",
  projectId: "sistema-f",
  storageBucket: "sistema-f.appspot.com",
  messagingSenderId: "1061618683462",
  appId: "1:1061618683462:web:3ffc5753c2effbd8870447"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export{
  auth,
  db
}