import React from 'react';
import renderer from 'react-test-renderer';

import { creditScoreReport, longTermDebtReport } from '../../../../tests/mocks/fixtures'
import mockAPIResponse from '../../../../tests/mocks/mockAPIResponse'

import Dashboard from './Dashboard.jsx';
import Loading from '../Loading/Loading.jsx'
import ReportContainer from '../ReportContainer/ReportContainer.jsx'

describe('Dashboard', () => {
  describe('when loading', () => {

    it('renders', () => {
      const component = renderer.create(<Dashboard />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });

    it('displays a loading sign', () => {
      const component = shallow(<Dashboard />);
      const loadingSign = component.find(Loading);
      expect(loadingSign.length).toEqual(1);
    });
  });

  describe('when loaded', () => {
    it('renders', () => {
      const component = renderer.create(<Dashboard loading={false}/>);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });

    const component = shallow(<Dashboard />);
    
    component.setState({
      loading: false,
      creditScore: creditScoreReport,
      longTermDebt: longTermDebtReport,
    });
    
    const reportContainer = component.find(ReportContainer);
    
    it('does not display a loading sign', () => {
      const loadingSign = component.find(Loading);
      expect(loadingSign.length).toEqual(0);
    });

    it('displays a report container', () => {
      expect(reportContainer.length).toEqual(1);
    });

    it('passes state to children as props', () => {
      expect(reportContainer.prop('creditScore')).toEqual(creditScoreReport);
      expect(reportContainer.prop('longTermDebt')).toEqual(longTermDebtReport);
    });
  });

});