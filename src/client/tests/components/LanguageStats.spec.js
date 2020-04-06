import React from 'react';
import LanguageStats from '../../components/LanguageStats';
import renderer from 'react-test-renderer';

describe('LanguageStats', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<LanguageStats stats={{}} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});