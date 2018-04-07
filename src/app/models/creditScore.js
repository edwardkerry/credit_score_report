const makeCreditScore = (data) => {
  return {
    score: data.score,
    maxScore: data.maxScoreValue,
    description: data.equifaxScoreBandDescription
  }
}

export default makeCreditScore