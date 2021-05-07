import firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyByy06rMSNN_Dnwnbikmsjaim970LrGDaY',
  authDomain: 'twitter-clone-7c1fa.firebaseapp.com',
  projectId: 'twitter-clone-7c1fa',
  storageBucket: 'twitter-clone-7c1fa.appspot.com',
  messagingSenderId: '946996362133',
  appId: '1:946996362133:web:fd94b259171e7ea9dc549c',
  measurementId: 'G-VK29L1QMSV',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;
