import assert from 'assert'
import jsdom from 'jsdom'

import React from 'react'

import ReactPassword from '../lib/main'
import TestUtils from 'react-addons-test-utils';

/* global beforeEach, describe, it */

describe('react-password', function () {
 var changeMethod = function(){

 };

  beforeEach(function () {
  })

  describe('> when revealed is false', function () {
    it('should be of type password', function () {
      var renderedComponent = TestUtils.renderIntoDocument(<ReactPassword reveal={ false } onChange={changeMethod} />)
      var inputComponent = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'react-password')
      var inputElement = React.findDOMNode(inputComponent)
      assert.strictEqual(inputElement.getAttribute('type'), 'password')
    })
  })

  describe('> when revealed is true', function () {
    it('should be of type password', function () {
      var renderedComponent = TestUtils.renderIntoDocument(<ReactPassword reveal={ true } onChange={changeMethod}/>)
      var inputComponent = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'react-password')
      var inputElement = React.findDOMNode(inputComponent)
      assert.strictEqual(inputElement.getAttribute('type'), 'text')
    })
  })

  describe('> when value is set', function () {
    it('should set state value', function () {
      var value = 'super secret'
      var renderedComponent = TestUtils.renderIntoDocument(<ReactPassword value={ value } onChange={changeMethod}/>)
      var inputComponent = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'react-password')
      var inputElement = React.findDOMNode(inputComponent)
      assert.strictEqual(renderedComponent.state.value, value)
      assert.strictEqual(inputElement.getAttribute('value'), value)
    })
  })

})
