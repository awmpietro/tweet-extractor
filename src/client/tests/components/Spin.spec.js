import React from 'react';
import ReactDOM from 'react-dom';
import Spin from '../../components/Spin/Spin';
import renderer from 'react-test-renderer';

describe('Spin', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Spin />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Spin />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});