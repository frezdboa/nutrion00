// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZRUboU_ebc_KOcgpFKyL2OdDV7-n7KpU",
    authDomain: "login-aa490.firebaseapp.com",
    projectId: "login-aa490",
    storageBucket: "login-aa490.appspot.com",
    messagingSenderId: "530127741243",
    appId: "1:530127741243:web:0a5ab15c661a544d50171e"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };