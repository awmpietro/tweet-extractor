import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../../pages/Home';
import renderer from 'react-test-renderer';

describe('Home', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Home />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});