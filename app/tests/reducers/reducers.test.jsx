var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('Reducers', ()=>{
  describe('searchTextReducer', ()=>{
    it('should set searchText', ()=>{
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      }

      var response = reducers.searchTextReducer(df(''), df(action));

      expect(response).toEqual(action.searchText);
    })
  })

  describe('showCompletedReducer', ()=>{
    it('should toggle Show Completed', ()=>{
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      }

      var response = reducers.showCompletedReducer(df(false), df(action));

      expect(response).toEqual(true);
    })
  })

  describe('todosReducer', ()=>{
    it('should add new todo', ()=>{
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'something to do',
          completed: false,
          createdAt: 143143
        }
      };

      var response = reducers.todosReducer(df([]), df(action));

      expect(response.length).toEqual(1);
      expect(response[0]).toEqual(action.todo);
    })

    it('should toggle todo', ()=>{
      var todos = [{
        id: '123',
        text: 'something',
        completed: true,
        createdAt: 123,
        completedAt: 456
      }];
      var updates = {
        completed: false,
        completedAt: null
      }
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      }

      var response = reducers.todosReducer(df(todos), df(action));

      expect(response[0].completed).toEqual(updates.completed);
      expect(response[0].completedAt).toEqual(updates.completedAt);
      expect(response[0].text).toEqual(todos[0].text);
    })

    it('should add existing todos', ()=>{
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
      var result = reducers.todosReducer(df([]), df(action));

      expect(result.length).toEqual(1);
      expect(result[0]).toEqual(todos[0]);
    })
  })
})
