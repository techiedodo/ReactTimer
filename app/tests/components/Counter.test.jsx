var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Counter = require('Counter');

describe('Counter', () => {
  it('should exist', () => {
    expect(Counter).toExist();
  });

  describe('handleSetCounter', () => {
    it('should set state to started and countdown', (done) => {
      var counter = TestUtils.renderIntoDocument(<Counter/>);
      counter.handleSetCounter(10);

      expect(counter.state.count).toBe(10);
      expect(counter.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(counter.state.count).toBe(9);
        done();
      }, 1001)
    });

    it('should not be negative in countdown', (done) => {
      var counter = TestUtils.renderIntoDocument(<Counter/>);
       counter.handleSetCounter(1);

      setTimeout(() => {
        expect(counter.state.count).toBe(0);
        done();
      }, 3001)
    });
  });
});
