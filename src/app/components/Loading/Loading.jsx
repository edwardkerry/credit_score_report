import React from 'react';
import bemHelper from '../../utils/bem';
import './loading.scss';

const cn = bemHelper({ block: 'report' });

export default() => (
  <div className={cn('loading', null)} />
);