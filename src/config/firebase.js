import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

// Firebase config - make sure to add your credentials here
const firebaseConfig = {
  apiKey: "AIzaSyDjGPm4vwRjNVCXCfHGuVCD6KjubmBW_wg",
  authDomain: "share-d3056.firebaseapp.com",
  projectId: "share-d3056",
  storageBucket: "share-d3056.firebasestorage.app",
  messagingSenderId: "297249025744",
  appId: "1:297249025744:web:e58d331726744e9455f8d5",
  measurementId: "G-WVH9E0MB66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.settings.appVerificationDisabledForTesting = true;
const googleProvider = new GoogleAuthProvider();

const setUpRecaptcha = () => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
      callback: (response) => {
        console.log("Recaptcha verified", response);
      },
      "expired-callback": () => {
        console.log("Recaptcha expired");
      },
    });
  }
};
export { app, auth, googleProvider, setUpRecaptcha };
