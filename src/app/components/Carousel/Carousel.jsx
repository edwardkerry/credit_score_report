import React, { Component } from 'react';
import { array } from 'prop-types';
import bemHelper from '../../utils/bem';
import Slide from './Slide/Slide.jsx';
import Dot from './Dot/Dot.jsx';
import './carousel.scss';
import { removeDotSegments } from 'uri-js';

const cn = bemHelper({ block: 'carousel' });

class Carousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeSlideIndex: 0
    };

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
    this.selectSlide = this.selectSlide.bind(this)
  };
  
  selectSlide(index) {
    this.setState({ activeSlideIndex: index });
  };

  getKey() {
    return `CarouselKey${this.keyCount ++}`
  }

  render() {
    return (
      <div className={cn('container', null)}>
        <ul className={cn('slides', null)}>
          {this.props.slides.map((slide, index) =>{
           return(<Slide 
              content={slide}
              active={index == this.state.activeSlideIndex}
              key={this.getKey()}
            />)
          })}
        </ul>

        <ul className={cn('dots', null)}>
          {this.props.slides.map((slide, index) => {
            return(<Dot
              select={() => this.selectSlide(index)}
              active={index == this.state.activeSlideIndex}
              key={this.getKey()}
            />) 
          })}
        </ul>
      </div>
    );
  };
};

Carousel.propTypes = {
  slides: array
};

export default Carousel;