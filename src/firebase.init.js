// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// getAuth import
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUOTEhHx9mIzSWinbolSdut7EiQMi548U",
  authDomain: "car-service-worker.firebaseapp.com",
  projectId: "car-service-worker",
  storageBucket: "car-service-worker.appspot.com",
  messagingSenderId: "696970444041",
  appId: "1:696970444041:web:a490de45ccef789daee7d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
