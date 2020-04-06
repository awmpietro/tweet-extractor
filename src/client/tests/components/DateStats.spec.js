import React from 'react';
import DateStats from '../../components/DateStats';
import renderer from 'react-test-renderer';

describe('DateStats', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<DateStats stats={{}} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});