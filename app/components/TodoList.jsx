// var React = require('react');
// var Todo = require('Todo');
import React from 'react';
import Todo from 'Todo';
var {connect} = require('react-redux');
var TodoAPI = require('TodoAPI');

export class TodoList extends React.Component{
  render(){
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted,searchText);
      if(filteredTodos.length===0){
        return (
          <p className="container__message text-center">Nothing To Do</p>
        )
      }
      return filteredTodos.map((todo)=>{
        return(
          <Todo key={todo.id} {...todo}/>
        )
      })
    }
    return(
      <div>
        {renderTodos()}
      </div>
    )
  }
}

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
