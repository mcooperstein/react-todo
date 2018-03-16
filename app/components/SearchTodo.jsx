var React = require('react');

var SearchTodo = React.createClass({
  handleSearch:function(){
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function(){
    return(
      <div className="container__header">
        <div>
          <input placeholder="search todos" ref="searchText" type="search" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
});

module.exports = SearchTodo;
