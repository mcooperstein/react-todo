import firebase from 'firebase';

try {
  var config = {
     apiKey: "AIzaSyB3NckMwPcAGuihSzcb9v-ofLwy6u0Luho",
     authDomain: "react-todo-app-a0a29.firebaseapp.com",
     databaseURL: "https://react-todo-app-a0a29.firebaseio.com",
     projectId: "react-todo-app-a0a29",
     storageBucket: "react-todo-app-a0a29.appspot.com",
     messagingSenderId: "762090090612"
   };

   firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
