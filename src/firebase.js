import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB_1kkcBSQ_YmF2HC1Kq6cUdWN5OKy5ibQ",
    authDomain: "crud-unico.firebaseapp.com",
    projectId: "crud-unico",
    storageBucket: "crud-unico.appspot.com",
    messagingSenderId: "490268548645",
    appId: "1:490268548645:web:b3a2b66162606587fb69cc"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase}