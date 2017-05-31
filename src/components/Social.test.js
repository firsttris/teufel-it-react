
import React from 'react';
import Social from './Social';
import renderer from 'react-test-renderer';

test('Display Social', () => {
  const component = renderer.create(
    <Social icon="fa-github" url="https://github.com/firsttris"></Social>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});