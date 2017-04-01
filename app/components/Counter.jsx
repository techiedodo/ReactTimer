var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Counter = React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  },
  handleSetCounter: function(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
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
