// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDBUZDyOGeilUOwIsNQ1QW4rS9vjr3UZIg",
  authDomain: "bookbridges.firebaseapp.com",
  projectId: "bookbridges",
  storageBucket: "bookbridges.appspot.com",
  messagingSenderId: "966224405514",
  appId: "1:966224405514:web:4b03bd885f637c1ffa6bf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;