import React from 'react';
import renderer from 'react-test-renderer';
import LongTermDebtReport from './LongTermDebtReport.jsx';

describe('LongTermDebtReport', () => {
  const currentCreditLimit = 0;
  const currentDebt = 800;
  
  it('renders', () => {
    const debtChange = 0
    console.log(debtChange)
    const component = renderer.create(<LongTermDebtReport 
      currentCreditLimit={currentCreditLimit} 
      currentDebt={currentDebt} 
      debtChange={debtChange}/>
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  
  describe('when long term debt has increased', () => {
    const debtChange = 800
    console.log(debtChange)

    it('renders', () => {
      const component = renderer.create(
        <LongTermDebtReport
          currentCreditLimit={currentCreditLimit}
          currentDebt={currentDebt}
          debtChange={debtChange} />
      );
  
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });
  
  describe('when long term debt has decreased', () => {
    const debtChange = -300

    it('renders', () => {
      const component = renderer.create(
        <LongTermDebtReport
          currentCreditLimit={currentCreditLimit}
          currentDebt={currentDebt}
          debtChange={debtChange} />
      );
  
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });
});
