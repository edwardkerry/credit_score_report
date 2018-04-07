import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './Loading.jsx'

describe('Loading', () => {
  it('renders', () => {
    const component = renderer.create(<Loading />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
})