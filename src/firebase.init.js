// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoS1BJGw3ZgxpT_X971G6xUWNaangtsak",
    authDomain: "genius-car-services-f2e85.firebaseapp.com",
    projectId: "genius-car-services-f2e85",
    storageBucket: "genius-car-services-f2e85.appspot.com",
    messagingSenderId: "274976172659",
    appId: "1:274976172659:web:831c267da67ad23a0c9806"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;