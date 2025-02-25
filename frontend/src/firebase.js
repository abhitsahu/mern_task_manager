// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyHsWN5JIKvXXzfqG83lf0fNTMojmzhmw",
  authDomain: "managetask-884ad.firebaseapp.com",
  projectId: "managetask-884ad",
  storageBucket: "managetask-884ad.firebasestorage.app",
  messagingSenderId: "762864229182",
  appId: "1:762864229182:web:28fc0684814b84483a6a6f",
  measurementId: "G-443BSXR31G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the app
export { app };

