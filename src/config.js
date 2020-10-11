import * as firebase from 'firebase';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyANpm4rkzAXt3tArEwgdeucL81l1IcNHmU",
    authDomain: "photos-competitions.firebaseapp.com",
    databaseURL: "https://photos-competitions.firebaseio.com",
    projectId: "photos-competitions",
    storageBucket: "photos-competitions.appspot.com",
    messagingSenderId: "375198374185",
    appId: "1:375198374185:web:6e310a2fc321ceaccfff38",
    measurementId: "G-MBNR6SP5CZ"
  };
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);