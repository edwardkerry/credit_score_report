import React, { Component } from 'react';
import { number, string } from 'prop-types';

import bemHelper from '../../utils/bem';

import './creditScoreReport.scss'

const cn = bemHelper({ block: 'report' });

const CreditScoreReport = ({ score, maxScore, description }) => {
  return (
    <div className={cn('creditScore', null)}>
      Your credit score is
      <p className={cn('score', null)}>{score}</p>
      out of
      <p className={cn('maxScore', null)}> {maxScore} </p>
      <p className={cn('description', null)}>{description}</p>
    </div>
  )
}

CreditScoreReport.propTypes = {
  description: string.isRequired,
  maxScore: number.isRequired,
  score: number.isRequired 
}

export default CreditScoreReport;