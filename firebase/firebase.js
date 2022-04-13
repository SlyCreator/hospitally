// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFXQ4oAI0XUufa-pgiBN1Sn08_AhTqYUg",
  authDomain: "hospitally-de74b.firebaseapp.com",
  projectId: "hospitally-de74b",
  storageBucket: "hospitally-de74b.appspot.com",
  messagingSenderId: "217472126722",
  appId: "1:217472126722:web:6fb974eab15a45df50fc1b",
  measurementId: "G-KMP0EGHS2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;