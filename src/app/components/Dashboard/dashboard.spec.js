import React from 'react';
import renderer from 'react-test-renderer';
import { creditScoreReport, longTermDebtReport } from '../../../../tests/mocks/fixtures';
import Dashboard from './Dashboard.jsx';
import Loading from '../Loading/Loading.jsx';
import ReportContainer from '../ReportContainer/ReportContainer.jsx';

describe('Dashboard', () => {
  describe('when loading', () => {
    it('renders', () => {
      const component = renderer.create(<Dashboard />)
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    })
    
    it('displays a loading sign', () => {
      const component = shallow(<Dashboard />);
      expect(component.find(Loading).exists()).toEqual(true);
    });
  });

  describe('when loaded', () => { 
    const component = shallow(<Dashboard />);
    
    component.setState({
      loading: false,
      creditScore: creditScoreReport,
      longTermDebt: longTermDebtReport,
    });
    
    it('does not display a loading sign', () => {
      const loadingSign = component.find(Loading);
      expect(component.find(Loading).exists()).toEqual(false);
    });
    
    describe('children', () => {
      const reportContainer = component.find(ReportContainer);
      
      it('displays a report container', () => {
        expect(reportContainer.length).toEqual(1);
      });
  
      it('passes state to children as props', () => {
        expect(reportContainer.prop('creditScore')).toEqual(creditScoreReport);
        expect(reportContainer.prop('longTermDebt')).toEqual(longTermDebtReport);
      });
    });
  });
});