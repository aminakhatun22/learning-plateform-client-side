// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbhvmmyybcv_vVBghn3d10gQDqcPHA_YQ",
    authDomain: "teaching-with-love-client.firebaseapp.com",
    projectId: "teaching-with-love-client",
    storageBucket: "teaching-with-love-client.appspot.com",
    messagingSenderId: "766203922357",
    appId: "1:766203922357:web:55838d42cbd3ec5b273bfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;