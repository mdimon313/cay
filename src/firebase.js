// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdeY26nyZaCFSJrBeAAc3tzNh2qP7YRGc",
  authDomain: "chat-ad154.firebaseapp.com",
  projectId: "chat-ad154",
  storageBucket: "chat-ad154.appspot.com",
  messagingSenderId: "499458723156",
  appId: "1:499458723156:web:257ad1c034f00e7ee24cc1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
