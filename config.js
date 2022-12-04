import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDsJmRXb1yHBYQ37iVmIeKwYnIuSVD7vVw",
  authDomain: "project-71-c06ba.firebaseapp.com",
  projectId: "project-71-c06ba",
  storageBucket: "project-71-c06ba.appspot.com",
  messagingSenderId: "684596977404",
  appId: "1:684596977404:web:aeda9bd61cf6cbc2f94179"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
