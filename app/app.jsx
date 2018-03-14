var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router,IndexRoute,hashHistory} = require('react-router');

// load foundation
$(document).foundation();

// Custom CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>Bolierplate 3 Project</p>,
  document.getElementById('app')
);
