import { renderComponent, expect } from '../test_helper.js';
import App from '../../src/containers/app/index.js';

describe('App', () => {

  it('shows main component ', () => {
    const component = renderComponent(App);
    console.log(component.find('main-wrap'));
    expect(component.find('main-wrap')).to.have.class('main-wrap');
    {/* expect(component).to.have.class('main-wrap'); */}
  });

  it('shows navbar component', () => {
    const component = renderComponent(App, null, {});
    expect(component.find('.nav-wrapper')).to.exist;
  });
  
});
