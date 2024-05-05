// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC38uP8v5XcppAFgj9XByF9IPm60L9jju0",
  authDomain: "twitter-clone-bdc4e.firebaseapp.com",
  projectId: "twitter-clone-bdc4e",
  storageBucket: "twitter-clone-bdc4e.appspot.com",
  messagingSenderId: "459335102839",
  appId: "1:459335102839:web:43f290ac2cd4d90992f172",
  measurementId: "G-Y89XVEENXS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth hizmetinin referansını al
export const auth = getAuth(app);

// google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();

// veritbanının referansını alma
export const db = getFirestore(app);

// medya depolama alanının referansını alma
export const storage = getStorage(app);
