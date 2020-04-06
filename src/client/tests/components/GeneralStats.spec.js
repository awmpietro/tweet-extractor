import React from 'react';
import GeneralStats from '../../components/GeneralStats';
import renderer from 'react-test-renderer';

describe('GeneralStats', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<GeneralStats stats={{}} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});