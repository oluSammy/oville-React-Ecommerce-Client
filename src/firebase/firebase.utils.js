import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDGVorq6WlOtUPx8Ew0hm08tYcm8gD_NPI",
    authDomain: "e-commerce-oville.firebaseapp.com",
    databaseURL: "https://e-commerce-oville.firebaseio.com",
    projectId: "e-commerce-oville",
    storageBucket: "e-commerce-oville.appspot.com",
    messagingSenderId: "650465885299",
    appId: "1:650465885299:web:42d4b374d464bb4fad3e06",
    measurementId: "G-R4BZHEQDTZ"
};

//initialize app
firebase.initializeApp(firebaseConfig);

//enable offline support
firebase.firestore().enablePersistence();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const FieldValue = firebase.firestore.FieldValue.serverTimestamp()

export default firebase;
