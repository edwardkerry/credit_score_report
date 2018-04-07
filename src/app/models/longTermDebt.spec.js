import makeLongTermDebt from './longTermDebt'
import mockAPIResponse from '../../../tests/mocks/mockAPIResponse'

describe('makeLongTermDebt', () => {
  it('returns a makeLongTermDebt object', () => {

    const creditReportAPIInfo = mockAPIResponse.creditReportInfo

    const expectedMakeLongTermDebt = {
      currentCreditLimit: 0,
      currentDebt: 24682,
      debtChange: -327
    }

    expect(makeLongTermDebt(creditReportAPIInfo)).toEqual(expectedMakeLongTermDebt);
  });

});
