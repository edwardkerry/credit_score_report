import React from 'react';
import renderer from 'react-test-renderer';
import CreditScoreReport from './CreditScoreReport.jsx';

describe('CreditScoreReport', () => {
  it('renders', () => {
    const score = 100;
    const maxScore = 700;
    const description = 'Not great'

    const component = renderer.create(
    <CreditScoreReport 
      score={score} 
      maxScore={maxScore} 
      description={description}/>
    );
    
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
