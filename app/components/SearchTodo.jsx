// var React = require('react');
import React from 'react';
var {connect} = require('react-redux');
var actions = require('actions');

export class SearchTodo extends React.Component{
  render(){
    var {dispatch, showCompleted, searchText} = this.props;
    return(
      <div className="container__header">
        <div>
          <input placeholder="search todos" ref="searchText" type="search" value={searchText} onChange={() => {
            var searchText = this.refs.searchText.value;
            dispatch(actions.setSearchText(searchText))
          }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={()=>{
              dispatch(actions.toggleShowCompleted());
            }}/>
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
};

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(SearchTodo);
