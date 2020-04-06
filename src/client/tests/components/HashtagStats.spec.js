import React from 'react';
import HashtagStats from '../../components/HashtagStats';
import renderer from 'react-test-renderer';

describe('HashtagStats', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<HashtagStats stats={{}} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});