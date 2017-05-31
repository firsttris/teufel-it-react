
import React from 'react';
import SubHeading from './SubHeading';
import renderer from 'react-test-renderer';

test('Display Subheading', () => {
  const component = renderer.create(
    <SubHeading title="Test Title" text="Subheading Test Title"></SubHeading>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});