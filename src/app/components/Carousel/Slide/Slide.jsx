import React, { Component } from 'react';
import { object, bool } from 'prop-types';
import bemHelper from '../../../utils/bem';
import './slide.scss';

const cn = bemHelper({ block: 'carousel' });

const Slide = ({content, active} ) => (
  <li
    className={
      active ? cn('slide', 'active') : cn('slide', null)
    }
  >
  {content}
  </li>
)

Slide.propTypes = {
  content: object.isRequired,
  active: bool
}

Slide.defaultProps = {
  active: false
}

export default Slide;