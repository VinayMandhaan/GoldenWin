import * as firebase from 'firebase';
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDBjrRM2wYX5S2QgknBfCPYSXO4V-_NWWw",
  authDomain: "goldenwinclient.firebaseapp.com",
  projectId: "goldenwinclient",
  storageBucket: "goldenwinclient.appspot.com",
  messagingSenderId: "264053663939",
  appId: "1:264053663939:web:fa60314910dabb6513da76",
  measurementId: "G-5JVGRTG63J"
  };
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);