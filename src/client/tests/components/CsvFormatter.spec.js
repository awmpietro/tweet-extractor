import React from 'react';
import ReactDOM from 'react-dom';
import CsvFormatter from '../../components/CsvFormatter';
import renderer from 'react-test-renderer';

describe('CsvFormatter', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<CsvFormatter results={[]} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CsvFormatter results={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});