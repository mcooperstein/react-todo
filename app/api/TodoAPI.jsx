var $ = require('jquery');

module.exports = {
  filterTodos: function(todos, showCompleted, searchText){
    let filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter(function(todo){
      // return todos that are NOT completed
      return !todo.completed || showCompleted;
    })

    // filter by searchText
    filteredTodos = filteredTodos.filter((todo)=>{
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || todo.text.indexOf(searchText.toLowerCase()) !== -1;
    });

    // sort todos with non-completed first
    filteredTodos.sort((a,b)=>{
      // return -1 -> a should come before b
      // return 0 -> a and b are equal
      // return 1 -> b should come before a
      if(a.completed===false && b.completed===true){
        return -1;
      } else if(a.completed && !b.completed){
        return 1;
      } else {
        return 0;
      }
    })
    return filteredTodos;
  }
};
