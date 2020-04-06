import React from 'react';
import useInput from '../../hooks/useInput';
import renderer from 'react-test-renderer';

describe('useInput', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<useInput initialValue={""} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});