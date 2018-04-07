import React from 'react';
import renderer from 'react-test-renderer';
import Carousel from 'nuka-carousel';

import { creditScoreReport, longTermDebtReport} from '../../../../tests/mocks/fixtures'

import ReportContainer from '../ReportContainer/ReportContainer.jsx'

describe('ReportContainer', () => {
  
  it('renders', () => {
    const component = renderer.create(<ReportContainer creditScore={creditScoreReport} longTermDebt={longTermDebtReport} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});