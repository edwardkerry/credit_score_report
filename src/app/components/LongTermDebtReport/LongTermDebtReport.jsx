import React, { Component } from 'react';
import { number, string } from 'prop-types';

import bemHelper from '../../utils/bem';

const cn = bemHelper({ block: 'report' });

const monthlyChange = (debtChange) => {
  const direction = debtChange >= 0 ? 'Up' : 'Down'
  return `${direction} £${Math.abs(debtChange)} from last month`
}

const LongTermDebtReport = ({ currentCreditLimit, currentDebt, debtChange }) => {
  return (
    <div className={cn('longTermDebt', null)}>
      Your long term debt total 
        <p className={cn('currentDebt', null)}>£{currentDebt}</p>

        <p className={cn('creditLimit', null)}>Total credit limit £{currentCreditLimit} </p>
      <p className={cn('debtChange', null)}>{monthlyChange(debtChange)} </p>
    </div>
  )
}

LongTermDebtReport.propTypes = {
  currentCreditLimit: number.isRequired,
  currentDebt: number.isRequired,
  debtChange: number.isRequired 
}

export default LongTermDebtReport;