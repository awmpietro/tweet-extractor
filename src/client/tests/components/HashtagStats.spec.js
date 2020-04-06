import React from 'react';
import ReactDOM from 'react-dom';
import HashtagStats from '../../components/HashtagStats';
import renderer from 'react-test-renderer';

describe('HashtagStats', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<HashtagStats stats={{}} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HashtagStats stats={{}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});