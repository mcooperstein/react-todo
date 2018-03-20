var React = require('react');
// var TodoList = require('TodoList');
// var AddTodo = require('AddTodo');
// var SearchTodo = require('SearchTodo');
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import SearchTodo from 'SearchTodo';
var uuid = require('node-uuid');
var moment = require('moment');

var TodoApp = React.createClass({
  render: function(){
    return(
      <div>
        <h1 className="page-title text-center">Todo App</h1>
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3">
            <div className="container1">
              <SearchTodo/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
