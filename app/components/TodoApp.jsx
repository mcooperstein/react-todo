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
          text: 'walk the dog'
        },
        {
          id: uuid(),
          text: 'clean my room'
        },
        {
          id: uuid(),
          text: 'do my homework'
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
          text:text
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
    var {todos} = this.state;

    return(
      <div>
        <SearchTodo onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
