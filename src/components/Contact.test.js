import React from 'react';
import Contact from './Contact';
import renderer from 'react-test-renderer';

test('Display Contact', () => {
  const component = renderer.create(
    <Contact info="+49 176 45744166" tel={true}></Contact>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});