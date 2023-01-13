// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDbVsp3G-p3NdYYsCQ1BVQUkCTzo2XNNWU",
  authDomain: "challenge-628da.firebaseapp.com",
  projectId: "challenge-628da",
  storageBucket: "challenge-628da.appspot.com",
  messagingSenderId: "514890846715",
  appId: "1:514890846715:web:3c48ba736a6959763e3b5e",
  measurementId: "G-EMLMW0174K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};