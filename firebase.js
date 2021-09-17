
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAReymc9vxKF-ILElh0MoRSZnmPd2tt92I",
    authDomain: "clone-da581.firebaseapp.com",
    projectId: "clone-da581",
    storageBucket: "clone-da581.appspot.com",
    messagingSenderId: "851325499921",
    appId: "1:851325499921:web:894483f8fcbd032ee28fb0"
  };


  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export default db;