import React from 'react';
import Consulting from './Consulting';
import renderer from 'react-test-renderer';

test('Display Component', () => {
  const component = renderer.create(
    <Consulting></Consulting>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});