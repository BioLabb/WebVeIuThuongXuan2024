// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3A5svGlF_2GHE475DLVtvtAupQHruYGU",
  authDomain: "danh-sach-ve-xuan.firebaseapp.com",
  databaseURL: "https://danh-sach-ve-xuan-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "danh-sach-ve-xuan",
  storageBucket: "danh-sach-ve-xuan.appspot.com",
  messagingSenderId: "584641686956",
  appId: "1:584641686956:web:24b4692da000cc92f75e09",
  measurementId: "G-G74J67EYX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const store = getFirestore(app);
export const database = getDatabase(app);
export const storage = getStorage(app);