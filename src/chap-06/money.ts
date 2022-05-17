export class Money {
  protected amount: number
  
  equals(other: any): boolean {
    const money: Money = other as Money
    return this.amount === money.amount
  }
}