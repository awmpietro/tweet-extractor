import React from 'react';
import ReactDOM from 'react-dom';
import LanguageStats from '../../components/LanguageStats';
import renderer from 'react-test-renderer';

describe('LanguageStats', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<LanguageStats stats={{}} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LanguageStats stats={{}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});