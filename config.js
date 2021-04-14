import * as firebase from 'firebase'
require("@firebase/firestore")
const firebaseConfig = {
    apiKey: "AIzaSyDicfJk_2a0oWiY6-JkzL0Bp_CXmeijNyQ",
    authDomain: "wily-53ab3.firebaseapp.com",
    databaseURL:"https://wily-53ab3.firebaseapp.com",
    projectId: "wily-53ab3",
    storageBucket: "wily-53ab3.appspot.com",
    messagingSenderId: "62265965647",
    appId: "1:62265965647:web:3cd7ddad4087df34923e3a"
  };
  //if(!firebase.apps.length){  
    firebase.initializeApp(firebaseConfig)
  //}
  export default firebase.firestore();