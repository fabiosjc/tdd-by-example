import { Dollar } from "./Dollar"

it('testEquality', () => {
  expect(new Dollar(5).equals(new Dollar(5)))
})