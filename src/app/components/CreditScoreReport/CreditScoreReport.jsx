import React, { Component } from 'react';
import { number, string } from 'prop-types';
import bemHelper from '../../utils/bem';
import ProgressArc from '../ProgressArc/ProgressArc'
import './creditScoreReport.scss'

const cn = bemHelper({ block: 'report' });

const CreditScoreReport = ({ score, maxScore, description }) => {
  return (
    <div className={cn('creditScore', null)}>
      <ProgressArc limit={maxScore} value={score}/>
      Your credit score is
      <p className={cn('score', null)}>{score}</p>
      out of <b>{maxScore}</b>
      <p className={cn('description', null)}>{description}</p>
    </div>
  );
};

CreditScoreReport.propTypes = {
  description: string.isRequired,
  maxScore: number.isRequired,
  score: number.isRequired 
};

export default CreditScoreReport;