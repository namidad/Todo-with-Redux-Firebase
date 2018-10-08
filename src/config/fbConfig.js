import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var config = {
    apiKey: "AIzaSyBVrd4se5V9SE8itpyOftc_ZvHl3IswjUg",
    authDomain: "mario-todo.firebaseapp.com",
    databaseURL: "https://mario-todo.firebaseio.com",
    projectId: "mario-todo",
    storageBucket: "mario-todo.appspot.com",
    messagingSenderId: "284037408204"
};
firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;