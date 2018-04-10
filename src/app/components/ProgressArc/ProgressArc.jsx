import React, { Component } from 'react';
import bemHelper from '../../utils/bem';
import './progressArc.scss'

const cn = bemHelper({ block: 'progress' });

const generatePercentage = (limit, value) => {
  (value/limit * 100).toFixed(3)
}

const ProgressArc = ({limit, value}) => (
  <div className={cn('container', null)}>
    <svg className={cn('circle', null)} viewBox="0 0 120 120">
      <circle className={cn('value', null)} cx="60" cy="60" r="54" fill="none" stroke="#76e8a9" strokeWidth="2" />
    </svg>
  </div>
);

export default ProgressArc;