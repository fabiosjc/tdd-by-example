import { Dollar } from "./Dollar"

it('testMultiplication', () => {
  const five = new Dollar(5)
  let product = five.times(2)
  expect(product).toEqual(new Dollar(10))

  product = five.times(3)
  expect(product).toEqual(new Dollar(15))
})