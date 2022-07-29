import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD0TZjA49GKm23-FOtSoFNb26cvcLZJpK8",
    authDomain: "cooking-world-site-6085e.firebaseapp.com",
    projectId: "cooking-world-site-6085e",
    storageBucket: "cooking-world-site-6085e.appspot.com",
    messagingSenderId: "343326420379",
    appId: "1:343326420379:web:1291dd8b0b5461dc46053e"
  };

  // init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }