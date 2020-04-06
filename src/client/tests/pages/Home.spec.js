import React from 'react';
import Home from '../../pages/Home';
import renderer from 'react-test-renderer';

describe('Home', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Home />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});