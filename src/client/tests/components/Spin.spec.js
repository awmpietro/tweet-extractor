import React from 'react';
import Spin from '../../components/Spin/Spin';
import renderer from 'react-test-renderer';

describe('Spin', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Spin />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});