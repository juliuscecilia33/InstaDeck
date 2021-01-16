import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "instadeck-c9606.firebaseapp.com",
  databaseURL: "https://instadeck-c9606.firebaseio.com",
  projectId: "instadeck-c9606",
  storageBucket: "instadeck-c9606.appspot.com",
  messagingSenderId: "793431210337",
  appId: "1:793431210337:web:9814b1df12575fdeaf6d20",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { firebaseApp, db, auth, storage };
