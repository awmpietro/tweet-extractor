import React from 'react';
import ReactDOM from 'react-dom';
import DateStats from '../../components/DateStats';
import renderer from 'react-test-renderer';

describe('DateStats', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<DateStats stats={{}} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DateStats stats={{}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});