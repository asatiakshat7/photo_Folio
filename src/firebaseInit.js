
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBwgZCUbcC4wmC9xBdOTeXsWJmg1wJvJJQ",
  authDomain: "album-babd9.firebaseapp.com",
  projectId: "album-babd9",
  storageBucket: "album-babd9.appspot.com",
  messagingSenderId: "394313866337",
  appId: "1:394313866337:web:6e010632be9308c8d59e20",
  measurementId: "G-7CZXDBQL9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);