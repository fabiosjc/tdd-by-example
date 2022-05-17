export class Franc {
  private amount: number

  constructor(amount: number) { 
    this.amount = amount
  }

  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier)
  }

  equals(other: Franc): boolean {
    const franc: Franc = other
    return this.amount === franc.amount
  }
}
