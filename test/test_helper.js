import React from 'react';
import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDom from 'react-dom';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../src/store/index.js';
import chaiJquery from 'chai-jquery';


// setup testing enviroment like browser in command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

// build render component that will render component for us
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(rootReducer, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
  return $(ReactDom.findDOMNode(componentInstance)); // => creates html
}

$.fn.simulate = function (eventName, value) {
  if (value) {
    this.val(value);
  }

  TestUtils.Simulate[eventName](this[0]);
};

// setup chai jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
