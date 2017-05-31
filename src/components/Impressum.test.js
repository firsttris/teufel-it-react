import React from 'react';
import Impressum from './Impressum';
import renderer from 'react-test-renderer';

test('Display Impressum', () => {
  const component = renderer.create(
    <Impressum></Impressum>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});