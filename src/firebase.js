import firebase from "firebase/compat/app";

//import { initializeApp } from 'firebase/app';

//import { getFirestore } from 'firebase/firestore/lite';

import "firebase/compat/auth";

import "firebase/compat/firestore";
// TODO: Replace the following with your app's Firebase project configuration


//const app = initializeApp(firebaseConfig);

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfe1mS5Kuf63yIM-igXu7iNqJONg1dBE4",
    authDomain: "so-me-clone.firebaseapp.com",
    projectId: "so-me-clone",
    storageBucket: "so-me-clone.appspot.com",
    messagingSenderId: "516758353621",
    appId: "1:516758353621:web:2510787dd3227fbdcd945c",
    measurementId: "G-NVGRLJVT5D"
  };

  //const firebaseApp = initializeApp(firebaseConfig);

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //const db = getFirestore(firebaseApp);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};

  export default db;