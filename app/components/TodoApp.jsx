var React = require('react');
// var TodoList = require('TodoList');
// var AddTodo = require('AddTodo');
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
var SearchTodo = require('SearchTodo');
var uuid = require('node-uuid');
var TodoAPI = require('TodoAPI');
var moment = require('moment');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  },
  componentDidUpdate: function(){
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function(text){
    // alert('new to do: ' + text);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text:text,
          completed: false,
          createdAt:moment().unix(),
          completedAt: undefined
        }
      ]
    })
  },
  handleSearch: function(showCompleted,searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function(){
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos,showCompleted,searchText);
    return(
      <div>
        <h1 className="page-title text-center">Todo App</h1>
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3">
            <div className="container1">
              <SearchTodo onSearch={this.handleSearch}/>
              <TodoList/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
