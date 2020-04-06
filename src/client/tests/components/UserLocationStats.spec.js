import React from 'react';
import ReactDOM from 'react-dom';
import UserLocationStats from '../../components/UserLocationStats';
import renderer from 'react-test-renderer';

describe('UserLocationStats', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<UserLocationStats stats={{}} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserLocationStats stats={{}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});