// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr-M60jcd-62XyqeSyG6oB1BK_Iv6I16A",
  authDomain: "simple-firebase-authenti-d3942.firebaseapp.com",
  projectId: "simple-firebase-authenti-d3942",
  storageBucket: "simple-firebase-authenti-d3942.appspot.com",
  messagingSenderId: "27674862531",
  appId: "1:27674862531:web:a0145c39bac663b5a79376",
  measurementId: "G-7R6TC5Z0BB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;