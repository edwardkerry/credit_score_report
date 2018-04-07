import makeCreditScore from './creditScore'
import mockAPIResponse  from '../../../tests/mocks/mockAPIResponse'

describe('makeCreditScore', () => {
  it('returns a creditScore object', () => {

    const creditReportAPIInfo = mockAPIResponse.creditReportInfo
    
    const expectedCreditScore = {
      description: "Excellent",
      maxScore: 700,
      score: 514
    }

    expect(makeCreditScore(creditReportAPIInfo)).toEqual(expectedCreditScore);
  });
});
