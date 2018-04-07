const makeLongTermDebt = (data) => {
  return {
    currentDebt: data.currentLongTermDebt,
    currentCreditLimit: data.currentLongTermCreditLimit,
    debtChange: data.changeInLongTermDebt
  }
}

export default makeLongTermDebt