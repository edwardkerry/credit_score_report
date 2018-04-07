import makeLongTermDebt from './longTermDebt'
import creditReportAPIResponse from '../../../tests/mocks/creditReportAPIResponse'

describe('makeLongTermDebt', () => {
  it('returns a makeLongTermDebt object', () => {

    const creditReportAPIInfo = creditReportAPIResponse.creditReportInfo

    const expectedMakeLongTermDebt = {
      currentCreditLimit: 0,
      currentDebt: 24682,
      debtChange: -327
    }

    expect(makeLongTermDebt(creditReportAPIInfo)).toEqual(expectedMakeLongTermDebt);
  });

});
