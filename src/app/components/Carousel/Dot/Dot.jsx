import React, { Component } from 'react';
import { func, bool } from 'prop-types';
import bemHelper from '../../../utils/bem';
import '../carousel.scss';

const cn = bemHelper({ block: 'carousel' });

const Dot = ({select, active}) => (
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
  select: func.isRequired,
  active: bool
}

Dot.defaultProps = {
  active: false
}

export default Dot;