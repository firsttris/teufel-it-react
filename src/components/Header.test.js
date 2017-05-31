import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';

test('Display Header', () => {
  const component = renderer.create(
    <Header title="[ teufel it ]" subtitle="Software ist unser Handwerk"></Header>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});