import React from 'react';
import Development from './Development';
import renderer from 'react-test-renderer';

test('Display Component', () => {
  const component = renderer.create(
    <Development></Development>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});