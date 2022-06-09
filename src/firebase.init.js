// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCahYgMgMCiq017t8kZl7dNRClq1P2DRU4",
    authDomain: "mdpranta-ddd78.firebaseapp.com",
    projectId: "mdpranta-ddd78",
    storageBucket: "mdpranta-ddd78.appspot.com",
    messagingSenderId: "207566737170",
    appId: "1:207566737170:web:e5a4db33dfadb548dcadcb",
    measurementId: "G-BZYG51HM51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);