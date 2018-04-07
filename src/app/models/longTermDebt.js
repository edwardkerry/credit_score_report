const makeLongTermDebt = (data) => {
  return {
    currentDebt: data.currentLongTermDebt,
    currentCreditLimit: data.currentLongTermCreditLimit || 0,
    debtChange: data.changeInLongTermDebt
  }
}

export default makeLongTermDebt