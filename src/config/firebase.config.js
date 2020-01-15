import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDkl63DQrcKBZfCjwNjFdCB8t0u1Va5C0E",
    authDomain: "react-redux-firebase-jdk.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-jdk.firebaseio.com",
    projectId: "react-redux-firebase-jdk",
    storageBucket: "react-redux-firebase-jdk.appspot.com",
    messagingSenderId: "525593398079",
    appId: "1:525593398079:web:e650a22f8e72d5112ce18a",
    measurementId: "G-WMN6T0N9RJ"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;