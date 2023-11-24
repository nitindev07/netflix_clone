// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC82WsF8AEfItaiQwaQt4Tkkp1JJTwscfQ",
  authDomain: "netflixclone-615d3.firebaseapp.com",
  projectId: "netflixclone-615d3",
  storageBucket: "netflixclone-615d3.appspot.com",
  messagingSenderId: "260347739535",
  appId: "1:260347739535:web:486fd5458f0a21d7eb1ffa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
