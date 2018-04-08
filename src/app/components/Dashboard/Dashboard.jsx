import React, { Component } from 'react'
import { getJSON } from '../../utils'
import config from  '../../../config/environment.js'
import makeCreditScore from '../../models/creditScore'
import makeLongTermDebt from '../../models/longTermDebt'
import Loading from '../Loading/Loading'
import ReportContainer from '../ReportContainer/ReportContainer'
import './dashboard.scss';

class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      creditScore: {},
      longTermDebt: {}
    }
  }

  componentDidMount() {
    getJSON(`${config.api.host}/creditReportInfo.json`)
    .then((response) => {
      this.setState({
        loading: false,
        creditScore: makeCreditScore(response.creditReportInfo),
        longTermDebt: makeLongTermDebt(response.creditReportInfo)
      })
    })
  }

   render() {
    return this.state.loading ?
      <Loading /> :
      <ReportContainer creditScore={this.state.creditScore} longTermDebt={this.state.longTermDebt}/>
  }
}

export default Dashboard;
