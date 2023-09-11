import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBw5Op74vEIgk4CVYnaZ5DIHfh58uQxF2g',
  authDomain: 'money-tracker-13e58.firebaseapp.com',
  projectId: 'money-tracker-13e58',
  storageBucket: 'money-tracker-13e58.appspot.com',
  messagingSenderId: '701336775353',
  appId: '1:701336775353:web:226d32817f09d6b8d5c968',
};

//Init firebase
firebase.initializeApp(firebaseConfig);

//Init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
