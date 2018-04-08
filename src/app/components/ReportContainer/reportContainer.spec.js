import React from 'react';
import Carousel from 'nuka-carousel';
import { creditScoreReport, longTermDebtReport} from '../../../../tests/mocks/fixtures'
import ReportContainer from '../ReportContainer/ReportContainer.jsx'

describe('ReportContainer', () => {

  it('renders a carousel', () => {
    const component = shallow(<ReportContainer creditScore={creditScoreReport} longTermDebt={longTermDebtReport} />);
    expect(component.find(Carousel).exists()).toEqual(true);
  });
});