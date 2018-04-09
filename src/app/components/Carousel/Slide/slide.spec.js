import React from 'react';
import Slide from './Slide.jsx';

describe('Slide', () => {
  const renderedText = 'hello'
  const passedContent = (<h1>{renderedText}</h1>) 
  describe('when active', () => {
    it('has an active class', () => {
      const component = shallow(<Slide active={true} content={passedContent } />)
      expect(component.find('li').hasClass('carousel__slide--active')).toEqual(true);
    });
  });

  describe('when inactive', () => {
    it('has does not have an active class', () => {
      const component = shallow(<Slide content={passedContent} />)
      expect(component.find('li').hasClass('carousel__slide--active')).toEqual(false);
    });
  });

  it('displays the passed content', () => {
    const component = shallow(<Slide content={ passedContent} />)
    expect(component.text()).toEqual(renderedText);
  });
});