import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyC6vtQ-RVs9OD9jicINHmaGHCO65Pl-EA0",
  authDomain: "react-firbase-todo.firebaseapp.com",
  projectId: "react-firbase-todo",
  storageBucket: "react-firbase-todo.appspot.com",
  messagingSenderId: "679581575981",
  appId: "1:679581575981:web:ae4e7c5b44a9fedd1f81a4",
  measurementId: "G-BJGXCZLEYC"
};


// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
console.log(db);

export {db}