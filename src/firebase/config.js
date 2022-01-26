import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIlMJhqIgnEDADbD9T2EjQOks0yqypfIE",
  authDomain: "photo-gallery-2c19b.firebaseapp.com",
  projectId: "photo-gallery-2c19b",
  storageBucket: "photo-gallery-2c19b.appspot.com",
  messagingSenderId: "628150152965",
  appId: "1:628150152965:web:76552dfc4f7401d11c116c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore};