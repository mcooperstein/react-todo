// var React = require('react');
// var TodoList = require('TodoList');
// var AddTodo = require('AddTodo');
// var SearchTodo = require('SearchTodo');
// var uuid = require('node-uuid');
// var moment = require('moment');
import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import SearchTodo from 'SearchTodo';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export class TodoApp extends React.Component{
  onLogout(e){
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  }
  render(){
    return(
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout.bind(this)}>Logout</a>
        </div>

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
};

// module.exports = TodoApp;
export default Redux.connect()(TodoApp);
