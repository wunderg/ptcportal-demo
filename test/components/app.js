import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../../src/containers/app/index.js';


describe('App', () => {

  it('shows main component ', () => {
    const component = mount(<App />)
    console.log(component);
    {/* expect(component).to.have.class('main-wrap'); */}
  });

  xit('shows navbar component', () => {
    const component = renderComponent(App, null, {});
    expect(component.find('.nav-wrapper')).to.exist;
  });
  
});
