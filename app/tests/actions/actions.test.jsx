var expect = require('expect');
var actions = require('actions');

describe('Actions', ()=>{
  it('should generate search text action', ()=>{
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some Search Text'
    }

    var response = actions.setSearchText(action.searchText);

    expect(response).toEqual(action);
  })

  it('should generate add todo action', ()=>{
    var action = {
      type: 'ADD_TODO',
      text: 'walk dog'
    }

    var response = actions.addTodo(action.text);

    expect(response).toEqual(action);
  })

  it('should generate add todos action object', ()=>{
    var todos = [{
      id: '111',
      text: 'anything',
      completed: false,
      createdAt: 3300,
      completedAt: undefined
    }];
    var action = {
      type: 'ADD_TODOS',
      todos
    };

    var response = actions.addTodos(todos);
    expect(response).toEqual(action);
  });

  it('should generate toggleShowCompleted action', ()=>{
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    }

    var response = actions.toggleShowCompleted();

    expect(response).toEqual(action);
  })

  it('should generate toggleTodo action', ()=>{
    var action = {
      type: 'TOGGLE_TODO',
      id: 2
    }

    var response = actions.toggleTodo(action.id);

    expect(response).toEqual(action);
  })
})
