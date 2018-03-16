var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
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
  handleToggle: function(id){
    // alert(id);
    var updatedTodos = this.state.todos.map(function(todo){
      if(todo.id===id){
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
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
          <div className="col-xs-8 col-xs-offset-2">
            <div className="container">
              <SearchTodo onSearch={this.handleSearch}/>
              <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
