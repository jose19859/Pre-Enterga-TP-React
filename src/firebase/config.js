import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyC9Z9s3vJAafMgaD19dnWgYmojSKFsFq9s",
  authDomain: "trabajofinal-nodejs-2026.firebaseapp.com",
  projectId: "trabajofinal-nodejs-2026",
  storageBucket: "trabajofinal-nodejs-2026.firebasestorage.app",
  messagingSenderId: "39408604674",
  appId: "1:39408604674:web:60ec2fc2b0a3fb86fb791b"
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);