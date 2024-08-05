// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9HFKBkI-gS9hdCpsptqueYmtE1phDkSg",
  authDomain: "inventory-management123.firebaseapp.com",
  projectId: "inventory-management123",
  storageBucket: "inventory-management123.appspot.com",
  messagingSenderId: "859923874566",
  appId: "1:859923874566:web:3dd24db55310052a1b9487"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export{firestore};