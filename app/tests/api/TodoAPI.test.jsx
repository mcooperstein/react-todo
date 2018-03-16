var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=>{
  beforeEach(()=>{
    localStorage.removeItem('todos');
  })

  it('should exist', ()=>{
    expect(TodoAPI).toExist();
  })

  describe('setTodos',()=>{
    // it('should not set invald todos array',()=>{
    //   let badTodos = {a:'b'};
    //
    //   TodoAPI.setTodos(badTodos);
    //
    //   expect(localStorage.getItem('todos')).toBe(null);
    // })
    //
    // it('should set valid todos array', ()=>{
    //   let todos = [{
    //     id: 1,
    //     text: 'test',
    //     completed: false
    //   }];
    //   TodoAPI.setTodos(todos);
    //
    //   var actualTodos = JSON.parse(localStorage.getItem('todos'));
    //   expect(actualTodos).toEqual(todos);
    // })

    it('should set valid todos array', ()=>{
      let todos = [{
        id: 1,
        text: 'test',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    })

    it('should not set invald todos array',()=>{
      let badTodos = {a:'b'};

      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    })

  })

  describe('getTodos',()=>{
    it('should return empty array for bad localStorage data', ()=>{
      let actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    })

    it('should return todos if valid array in localStorage', ()=>{
      let todos = [{
        id: 1,
        text: 'test',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      let actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    })
  })
})
