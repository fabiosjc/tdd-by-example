export class Money {
  protected amount: number
  
  equals(other: Object): boolean {
    const money: Money = other as Money
    return this.amount === money.amount &&
      this.constructor.name === money.constructor.name
  }
}