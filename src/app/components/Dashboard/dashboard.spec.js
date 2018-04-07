import React from 'react';
import renderer from 'react-test-renderer';

import { creditScoreReport, longTermDebtReport } from '../../../../tests/mocks/fixtures'
import mockAPIResponse from '../../../../tests/mocks/mockAPIResponse'

import Dashboard from './Dashboard.jsx';
import Loading from '../Loading/Loading.jsx'
import ReportContainer from '../ReportContainer/ReportContainer.jsx'

describe('Dashboard', () => {
  describe('when loading', () => {
    it('displays a loading sign', () => {
      const component = renderer.create(<Dashboard />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe('when loaded', () => {
    it('displays a report container', () => {
      const component = renderer.create(<Dashboard loading={false} />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });

    
    it('passes state to children as props', () => {
      const component = mount(<Dashboard />);
  
      component.setState({
        loading: false,
        creditScore: creditScoreReport,
        longTermDebt: longTermDebtReport,
      });
  
      const result = component.find(ReportContainer);
      expect(result.prop('creditScore')).toEqual(creditScoreReport);
      expect(result.prop('longTermDebt')).toEqual(longTermDebtReport);
    });
  });

  xdescribe('componentDidMount', () => {

    it('sets loading to false after fetching data', (done) => {
      const component = shallow(<Dashboard />);
      component.instance().componentDidMount();
      expect(component.state('loading')).toEqual(false);
    });
  });


});