import React, { Component } from 'react';
import {shape, number, string } from 'prop-types';

import Carousel from 'nuka-carousel';
import CreditScoreReport from '../CreditScoreReport/CreditScoreReport.jsx';
import LongTermDebtReport from '../LongTermDebtReport/LongTermDebtReport.jsx';

import bemHelper from '../../utils/bem';

const cn = bemHelper({ block: 'report' });

const ReactContainer = ({ creditScore, longTermDebt}) => {

  const { score, maxScore, description } = { ...creditScore };
  const { currentCreditLimit, currentDebt, debtChange} = { ...longTermDebt }

   return (
    <Carousel className={cn('carousel', null)}>
      <CreditScoreReport 
        score={score} 
        maxScore={maxScore} 
        description={description} 
      />
      <LongTermDebtReport 
        currentCreditLimit={currentCreditLimit} 
        currentDebt={currentDebt} 
        debtChange={debtChange}
      />
    </Carousel>
  );
};

ReactContainer.propTypes = {
  creditScore: shape({
    description: string.isRequired,
    maxScore: number.isRequired,
    score: number.isRequired 
  }),

  longTermDebt:  shape({
    currentDebt: number.isRequired,
    currentCreditLimit: number.isRequired,
    debtChange: number.isRequired
  })
}

export default ReactContainer;
