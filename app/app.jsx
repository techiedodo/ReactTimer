var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Counter = require('Counter');

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// Custom css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer}></IndexRoute>
      <Route path="counter" component={Counter}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
