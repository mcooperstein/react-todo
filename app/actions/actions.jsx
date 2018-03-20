export var setSearchText = (searchText) => {
  return {
    searchText,
    type: 'SET_SEARCH_TEXT'
  }
};

export var addTodo = (text) => {
  return {
    text,
    type: 'ADD_TODO'
  };
}

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
}

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
