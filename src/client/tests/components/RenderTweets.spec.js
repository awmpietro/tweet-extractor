import React from 'react';
import RenderTweets from '../../components/RenderTweets';
import renderer from 'react-test-renderer';

describe('LanguageStats', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<RenderTweets results={[]} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});