export class Dollar {
  private amount: number

  constructor(amount: number) { 
    this.amount = amount
  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier)
  }

  equals(other: Dollar): boolean {
    const dollar: Dollar = other
    return this.amount === dollar.amount
  }
}
