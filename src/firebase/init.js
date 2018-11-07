  import firebase from 'firebase'
  import firestore from 'firebase/firestore'

  // Initialize Firebase
    var config = {
    apiKey: "AIzaSyDugjU936FJLaR3wOhiZu9lxYfs4qJjV1o",
    authDomain: "what-to-eat-741e4.firebaseapp.com",
    databaseURL: "https://what-to-eat-741e4.firebaseio.com",
    projectId: "what-to-eat-741e4",
    storageBucket: "what-to-eat-741e4.appspot.com",
    messagingSenderId: "731824508426"
    };
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true});

// export firestore database
export default firebaseApp.firestore()