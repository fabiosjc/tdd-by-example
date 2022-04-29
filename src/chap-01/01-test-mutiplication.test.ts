it('testMultiplication', () => {
  Dollar five = new Dollar(3)
  five.times(2)
  assertEquals(10, five.amount)
})