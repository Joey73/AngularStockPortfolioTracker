export class PortfolioDividendDto {
  constructor(
      public id: number,
      public totalCollectedCad: number,
      public totalCollectedEur: number,
      public totalCollectedUsd: number,
      public annualDividends: number,
      public monthlyDividends: number,
      public exDateDividends: number
  ) {}
}
