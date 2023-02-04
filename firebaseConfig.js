import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXqaNHfKUjAyszzIznyLxjdXebmaQznSQ",
  authDomain: "to-do-v2-f8e90.firebaseapp.com",
  projectId: "to-do-v2-f8e90",
  storageBucket: "to-do-v2-f8e90.appspot.com",
  messagingSenderId: "156045588593",
  appId: "1:156045588593:web:1c49ed43ff3c186db283d0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
