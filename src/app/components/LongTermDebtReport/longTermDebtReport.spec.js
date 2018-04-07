import React from 'react';
import renderer from 'react-test-renderer';
import LongTermDebtReport from './LongTermDebtReport.jsx';

describe('LongTermDebtReport', () => {
  it('renders', () => {

    const currentCreditLimit = 0;
    const currentDebt = 800;
    const debtChange = -100

    const component = renderer.create(
    <LongTermDebtReport 
      currentCreditLimit={currentCreditLimit} 
      currentDebt={currentDebt} 
      debtChange={debtChange}/>
    );
    
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('displays when long term debt has increased', () => {
    const currentCreditLimit = 0;
    const currentDebt = 800;
    const debtChange = 100

    const component = renderer.create(
      <LongTermDebtReport
        currentCreditLimit={currentCreditLimit}
        currentDebt={currentDebt}
        debtChange={debtChange} />
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('displays when long term debt has decreased', () => {
    const currentCreditLimit = 0;
    const currentDebt = 800;
    const debtChange = -100

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
