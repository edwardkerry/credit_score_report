import React, { Component } from 'react';
import { func, bool } from 'prop-types';
import bemHelper from '../../../utils/bem';
import '../carousel.scss';

const cn = bemHelper({ block: 'carousel' });

const Dot = ({active, select}) => (
  <li>
    {active ? 
      <a className={ cn('dot', 'active')}/> :
      <a className={cn('dot', 'null')}
        onClick={select}
      /> 
    } 
  </li>
)

Dot.propTypes = {
  active: bool,
  select: func.isRequired
}

Dot.defaultProps = {
  active: false
}

export default Dot;