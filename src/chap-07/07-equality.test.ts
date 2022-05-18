import { Dollar } from "./dollar"
import { Franc } from "./franc"

it('testEquality', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
  expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy()

  expect(new Franc(5).equals(new Franc(5))).toBeTruthy()
  expect(new Franc(5).equals(new Franc(6))).toBeFalsy()

  expect(new Franc(5).equals(new Dollar(5))).toBeFalsy()
})