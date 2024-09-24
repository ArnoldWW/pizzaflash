// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARGaSK8YC5UPp-8AdlxD13AiibYq5bCOE",
  authDomain: "pizzaflash-fb728.firebaseapp.com",
  projectId: "pizzaflash-fb728",
  storageBucket: "pizzaflash-fb728.appspot.com",
  messagingSenderId: "447234121230",
  appId: "1:447234121230:web:b3f04530bf0f48dc82a65f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
