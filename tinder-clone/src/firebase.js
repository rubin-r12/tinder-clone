import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBC_TYsOWgPt_Fp26eJiA0xSaxaSTMHI2A",
  authDomain: "tinder-clone-4a496.firebaseapp.com",
  databaseURL: "https://tinder-clone-4a496.firebaseio.com",
  projectId: "tinder-clone-4a496",
  storageBucket: "tinder-clone-4a496.appspot.com",
  messagingSenderId: "59186992150",
  appId: "1:59186992150:web:f5097d6bf256b793871137",
  measurementId: "G-B6K7BK27H1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
