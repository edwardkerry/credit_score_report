import React from 'react';
import { creditScoreReport, longTermDebtReport} from '../../../../tests/mocks/fixtures';
import CreditScoreReport from '../CreditScoreReport/CreditScoreReport.jsx';
import longTermDebt from '../LongTermDebtReport/LongTermDebtReport.jsx';
import ReportContainer from '../ReportContainer/ReportContainer.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import LongTermDebtReport from '../LongTermDebtReport/LongTermDebtReport.jsx';

describe('ReportContainer', () => {

  it('renders a carousel', () => {
    const component = shallow(<ReportContainer creditScore={creditScoreReport} longTermDebt={longTermDebtReport} />);
    expect(component.find(Carousel).exists()).toEqual(true);
  });
  
  it('passes components as props to the carousel', () => {

    const expectedCreditScoreComponent = <CreditScoreReport 
      description={creditScoreReport.description}
      maxScore={creditScoreReport.maxScore} 
      score={creditScoreReport.score} 
    />

    const expectedLongTermDebtReport = <LongTermDebtReport
      currentCreditLimit={longTermDebtReport.currentCreditLimit}
      currentDebt={longTermDebtReport.currentDebt}
      debtChange={longTermDebtReport.debtChange}
    />

    const component = shallow(<ReportContainer creditScore={creditScoreReport} longTermDebt={longTermDebtReport} />);
    expect(component.find(Carousel).prop('slides')).
      toEqual([expectedCreditScoreComponent, expectedLongTermDebtReport])
  });

});