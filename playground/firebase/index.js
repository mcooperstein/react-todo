import firebase from 'firebase';

var config = {
   apiKey: "AIzaSyB3NckMwPcAGuihSzcb9v-ofLwy6u0Luho",
   authDomain: "react-todo-app-a0a29.firebaseapp.com",
   databaseURL: "https://react-todo-app-a0a29.firebaseio.com",
   projectId: "react-todo-app-a0a29",
   storageBucket: "react-todo-app-a0a29.appspot.com",
   messagingSenderId: "762090090612"
 };
 firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

 firebaseRef.set({
   app: {
     name: 'Todo App',
     version: '1.0.0'
   },
   isRunning: true,
   user: {
     name: 'Marc',
     age: 27
   }
 })

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot)=>{
  console.log('child added', snapshot.key, snapshot.val());
})

todosRef.push({
  text: 'Todo 1'
})
todosRef.push({
  text: 'Todo 2'
})
