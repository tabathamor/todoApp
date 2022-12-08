// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiAkDHPICER7TKd2JvTTw8URUQZkkh_a0",
  authDomain: "todo-app-1386c.firebaseapp.com",
  projectId: "todo-app-1386c",
  storageBucket: "todo-app-1386c.appspot.com",
  messagingSenderId: "646545868781",
  appId: "1:646545868781:web:00f813c7db33c2aeacc9e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)