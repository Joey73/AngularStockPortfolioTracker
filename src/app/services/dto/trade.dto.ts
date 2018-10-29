export class TradeDto {
  constructor(
      public id: number,
      public payDate: string,
      public symbol: string,
      public buySell: string,
      public amountOfShares: number,
      public marketPrice: number,
      public pricePerShare: number,
      public priceTotal: number,
      public fee: number
  ) {}
}
