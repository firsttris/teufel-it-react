import React from 'react';
import FullImage from './FullImage';
import renderer from 'react-test-renderer';
import Paper from './../assets/images/backgrounds/paper.png';

test('Display FullImage', () => {
  const component = renderer.create(
    <FullImage image={Paper} height="550px"></FullImage>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});