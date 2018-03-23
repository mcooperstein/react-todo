import firebase from 'firebase';

try {
  var config = {
     apiKey: process.env.API_KEY,
     authDomain: process.env.AUTH_DOMAIN,
     databaseURL: process.env.DATABASE_URL,
     projectId: "react-todo-app-a0a29",
     storageBucket: process.env.STORAGE_BUCKET,
     messagingSenderId: "762090090612"
   };

   firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
