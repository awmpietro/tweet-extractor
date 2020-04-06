import React from 'react';
import UserLocationStats from '../../components/UserLocationStats';
import renderer from 'react-test-renderer';

describe('UserLocationStats', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<UserLocationStats stats={{}} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});