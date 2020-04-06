import React from 'react';
import ReactDOM from 'react-dom';
import GeneralStats from '../../components/GeneralStats';
import renderer from 'react-test-renderer';

describe('GeneralStats', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<GeneralStats stats={{}} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GeneralStats stats={{}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});