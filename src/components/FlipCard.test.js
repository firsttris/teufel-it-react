import React from 'react';
import FlipCard from './FlipCard';
import renderer from 'react-test-renderer';

test('FlipCard changes the class when hovered', () => {
  const component = renderer.create(
    <FlipCard key="1" class="col-xs-12 col-md-6 col-lg-3" icon="fa-github" title="Hello" text="test"></FlipCard>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});