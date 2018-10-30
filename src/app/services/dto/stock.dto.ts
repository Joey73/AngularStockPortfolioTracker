export class StockDto {
  constructor(
      public symbol: string,
      public name: string,
      public sector: string,
      public industry: string
  ) {}
}
