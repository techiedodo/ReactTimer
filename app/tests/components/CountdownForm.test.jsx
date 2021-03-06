var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCounter if valid seconds entered', () => {
    var spy = expect.createSpy();
    var countDownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCounter={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countDownForm));

    countDownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCounter if invalid seconds entered', () => {
    var spy = expect.createSpy();
    var countDownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCounter={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countDownForm));

    countDownForm.refs.seconds.value = 'ABC';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
