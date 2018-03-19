var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router,IndexRoute,hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(()=>{
  console.log('New State', store.getState());
})

store.dispatch(actions.addTodo('take a poop'));
store.dispatch(actions.setSearchText('poo'))
store.dispatch(actions.toggleShowCompleted());

// load foundation
$(document).foundation();

// Custom CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
