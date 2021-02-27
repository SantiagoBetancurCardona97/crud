import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDSb_n-CDy3JjCsOzXfd6ozJwJCSDgEeUA",
    authDomain: "crud-b3dd9.firebaseapp.com",
    projectId: "crud-b3dd9",
    storageBucket: "crud-b3dd9.appspot.com",
    messagingSenderId: "635915041415",
    appId: "1:635915041415:web:27cf8d2f28163d23515622"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
