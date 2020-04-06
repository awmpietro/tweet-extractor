import React from 'react';
import TweetBox from '../../components/TweetBox';
import renderer from 'react-test-renderer';

describe('TweetBox', () => {
  test('snapshot renders', () => {
    const result = {"user" : {}};
    const component = renderer.create(<TweetBox result={result} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});