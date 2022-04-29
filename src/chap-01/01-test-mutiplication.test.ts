import { Dollar } from "./Dollar"

it('testMultiplication', () => {
  const five = new Dollar(3)
  five.times(2)
  expect(five.amount).toBe(10)
})