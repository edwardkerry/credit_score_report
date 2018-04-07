import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { creditScoreReport, longTermDebtReport} from '../../../../tests/mocks/creditReportAPIResponse'

import ReportContainer from '../Loading/Loading.jsx'
import Carousel from 'nuka-carousel';


fdescribe('ReactContainer', () => {
  
  it('renders', () => {
    const component = renderer.create(<ReportContainer creditScore={creditScoreReport} longTermDebt={longTermDebtReport} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('has a carousel slider', () => { 
    const component = shallow(<ReportContainer creditScore={creditScoreReport} longTermDebt={longTermDebtReport} />);
    console.log(component.children().find(Carousel).length)
    expect(component.find(Carousel).length).toEqual(1);
  });
});