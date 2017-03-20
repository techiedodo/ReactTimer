var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Counter = React.createClass({
  getInitialState: function(){
    return {count: 0};
  },
  handleSetCounter: function(seconds){
    this.setState({
      count: seconds
    });
  },
  render: function(){
    var {count} = this.state;
    return(
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCounter={this.handleSetCounter}/>
      </div>
    );
  }
});

module.exports = Counter;
