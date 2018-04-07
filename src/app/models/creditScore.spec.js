import makeCreditScore from './creditScore'
import creditReportAPIResponse  from '../../../tests/mocks/creditReportAPIResponse'

describe('makeCreditScore', () => {
  it('returns a creditScore object', () => {

    const creditReportAPIInfo = creditReportAPIResponse.creditReportInfo
    
    const expectedCreditScore = {
      description: "Excellent",
      maxScore: 700,
      score: 514
    }

    expect(makeCreditScore(creditReportAPIInfo)).toEqual(expectedCreditScore);
  });
});
