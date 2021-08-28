// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB91loM-UvJSfwt0yMruogA4eh3LudCqXY",
    authDomain: "netflix-clone-ebab4.firebaseapp.com",
    projectId: "netflix-clone-ebab4",
    storageBucket: "netflix-clone-ebab4.appspot.com",
    messagingSenderId: "834498021343",
    appId: "1:834498021343:web:7a72d13c888d84e208666a",
    measurementId: "G-KC7TMVSXT9"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged};
export default db;

