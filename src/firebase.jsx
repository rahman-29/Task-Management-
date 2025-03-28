// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Add this

const firebaseConfig = {
  apiKey: "AIzaSyCZ6782Ki1sENq9cGacWCl9yaMvKiPySEk",
  authDomain: "task-management-5b8a3.firebaseapp.com",
  databaseURL: "https://task-management-5b8a3-default-rtdb.firebaseio.com",
  projectId: "task-management-5b8a3",
  storageBucket: "task-management-5b8a3.firebasestorage.app",
  messagingSenderId: "442239584102",
  appId: "1:442239584102:web:7dc0d83349535cee852aa7",

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // ✅ Add this
