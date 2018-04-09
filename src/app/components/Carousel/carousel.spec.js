import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Carousel from './Carousel.jsx';
import Slide from './Slide/Slide.jsx';
import Dot from './Dot/Dot.jsx';

describe('Carousel', () => {
  const componentOne = (<h1>Example 1</h1>)
  const componentTwo = (<h2>Example 2</h2>)
  const componentThree = (<h3>Example 3</h3>)
  const passedComponents = [componentOne, componentTwo, componentThree]
  it('renders', () => {
    const component = renderer.create(<Carousel slides={passedComponents} />)
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders the passed components as slides', () => {
    const component = shallow(<Carousel slides={passedComponents} />)
    expect(component.find('.carousel__slides').children().length).toEqual(passedComponents.length)
  })

  it('renders a selection dot for each passed component', () => {
    const component = shallow(<Carousel slides={passedComponents} />)
    expect(component.find('.carousel__dots').children().length).toEqual(passedComponents.length)
  })

  describe('#getKey', () => {
    it('increments the keyCount to generate a unique ID', () => {
      const component = shallow(<Carousel slides={[]}/>).instance()
      expect(component.getKey()).toEqual('CarouselKey0')
      expect(component.getKey()).toEqual('CarouselKey1')
    });
  });

  describe('#selectSlide', () => {
    it('sets the passed value as the current active slide index')
    const currentIndex = 999
    const component = mount(<Carousel slides={[]} />).instance()
    component.selectSlide(currentIndex)
    expect(component.state.activeSlideIndex).toEqual(999)
  })
});