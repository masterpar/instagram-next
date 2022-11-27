// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFmUlq5LcQ1ZHYh6_U27YS-X_aXIcO9dk",
    authDomain: "instagram-next-fd155.firebaseapp.com",
    projectId: "instagram-next-fd155",
    storageBucket: "instagram-next-fd155.appspot.com",
    messagingSenderId: "283232325777",
    appId: "1:283232325777:web:839cbf231489bc2dc86f30"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore()
const storage = getStorage();

export { app, db, storage };