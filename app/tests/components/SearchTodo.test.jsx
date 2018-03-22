var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

// var SearchTodo = require('SearchTodo');
import {SearchTodo} from 'SearchTodo';

describe('SearchTodo', ()=>{
  it('should exist',()=>{
    expect(SearchTodo).toExist();
  })

  it('should dispatch SET_SEARCH_TEXT on input change', ()=>{
    var searchText = 'Dog';
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    }
    var spy = expect.createSpy();
    var searchTodo = TestUtils.renderIntoDocument(<SearchTodo dispatch={spy}/>);

    searchTodo.refs.searchText.value = searchText;
    TestUtils.Simulate.change(searchTodo.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked',()=>{
    var spy = expect.createSpy();
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var searchTodo = TestUtils.renderIntoDocument(<SearchTodo dispatch={spy}/>);

    searchTodo.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(searchTodo.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  })
})
