import React from 'react';
import ReactDOM from 'react-dom';
import TweetBox from '../../components/TweetBox';
import renderer from 'react-test-renderer';

describe('TweetBox', () => {
  const result = {"user" : {}};
  test('snapshot renders', () => {
    const component = renderer.create(<TweetBox result={result} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TweetBox result={result} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});