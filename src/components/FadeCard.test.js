import React from 'react';
import FadeCard from './FadeCard';
import renderer from 'react-test-renderer';

test('FadeCard changes the class when hovered', () => {
  const component = renderer.create(
    <FadeCard key="1" class="col-xs-12 col-md-6 col-lg-6" icon="fa-github" title="Hello" text="test"></FadeCard>
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