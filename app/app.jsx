var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router,IndexRoute,hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import Login from 'Login';
import TodoApp from 'TodoApp';
// import './../playground/firebase/index';

store.dispatch(actions.startAddTodos());

// load foundation
$(document).foundation();

// Custom CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
    {/* <TodoApp/> */}
  </Provider>,
  document.getElementById('app')
);
