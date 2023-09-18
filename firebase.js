// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCSne7SiqO2SkJQKO4ywTVxHlyv36Z8n-k",
	authDomain: "rn-login-2ec4f.firebaseapp.com",
	projectId: "rn-login-2ec4f",
	storageBucket: "rn-login-2ec4f.appspot.com",
	messagingSenderId: "787470554278",
	appId: "1:787470554278:web:af413e595c51b95da2d067",
};

// Initialize Firebase
!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
