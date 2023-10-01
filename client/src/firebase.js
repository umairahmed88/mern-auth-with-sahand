// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "mern-auth-sahand.firebaseapp.com",
	projectId: "mern-auth-sahand",
	storageBucket: "mern-auth-sahand.appspot.com",
	messagingSenderId: "344022429257",
	appId: "1:344022429257:web:88af64d0cb4301559a5998",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
