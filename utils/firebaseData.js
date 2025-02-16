import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

var config = {
  apiKey: "AIzaSyDqe5r2_68ASMBGi4wH8-s_WJW82nDcu38",
  authDomain: "startupmag-c4bdc.firebaseapp.com",
  projectId: "startupmag-c4bdc",
  storageBucket: "startupmag-c4bdc.appspot.com",
  messagingSenderId: "629835838875",
  appId: "1:629835838875:web:e8b295bdbce2a81f211d3e"
};


if (!firebase.apps.length) {
  firebase.initializeApp(config);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  // if (!firebase.apps.length) {
  //   firebase.initializeApp(config);
  // }
  
  
  const firestore = firebase.firestore()
  const storage = firebase.storage()
  const auth = firebase.auth()
  
  export { firestore, storage, auth, firebase}