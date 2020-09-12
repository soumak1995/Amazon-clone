import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBisDzFOaAe7VC1g2o84GSwAsJODqwPwLI",
    authDomain: "clone-73d94.firebaseapp.com",
    databaseURL: "https://clone-73d94.firebaseio.com",
    projectId: "clone-73d94",
    storageBucket: "clone-73d94.appspot.com",
    messagingSenderId: "19767895150",
    appId: "1:19767895150:web:3e693b6bfc60137ce8f27f",
    measurementId: "G-SM38S3FZXS"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth =firebase.auth();

  export {db,auth};
