import React from 'react';
import CsvFormatter from '../../components/CsvFormatter';
import renderer from 'react-test-renderer';

describe('CsvFormatter', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<CsvFormatter results={[]} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});