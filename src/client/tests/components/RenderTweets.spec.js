import React from 'react';
import ReactDOM from 'react-dom';
import RenderTweets from '../../components/RenderTweets';
import renderer from 'react-test-renderer';

describe('LanguageStats', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<RenderTweets results={[]} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RenderTweets results={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});