import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDYSJUGgAQyq-veu_lp9_sFoyYNgA-T7EE",
    authDomain: "crud-table-9c715.firebaseapp.com",
    projectId: "crud-table-9c715",
    storageBucket: "crud-table-9c715.appspot.com",
    messagingSenderId: "859727459032",
    appId: "1:859727459032:web:469d5de172b47e736cddad"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase}