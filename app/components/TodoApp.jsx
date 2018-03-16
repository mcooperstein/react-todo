var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var SearchTodo = require('SearchTodo');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          //generates random/unique id
          id: uuid(),
          text: 'walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'clean my room',
          completed: true
        },
        {
          id: uuid(),
          text: 'do my homework',
          completed: false
        },
        {
          id: uuid(),
          text: 'take out the trash',
          completed: false
        },
      ]
    }
  },
  handleAddTodo: function(text){
    // alert('new to do: ' + text);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text:text,
          completed: false
        }
      ]
    })
  },
  handleToggle: function(id){
    // alert(id);
    var updatedTodos = this.state.todos.map(function(todo){
      if(todo.id===id){
        todo.completed = !todo.completed;
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
    var {todos} = this.state;

    return(
      <div>
        <SearchTodo onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
