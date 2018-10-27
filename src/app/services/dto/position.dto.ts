export class PositionDto {
  constructor(
      public id: number,
      public symbol: string,
      public companyName: string,
      public currency: string,
      public weight: number,
      public marketPrice: number,
      public effectivePrice: number,
      public totalValueGrowth: number,
      public numberOfShares: number,
      public marketValue: number,
      public effectiveCosts: number,
      public totalEarnings: number,
      public forwardAnnualDividends: number,
      public trailingYieldOnMarket: number,
      public forwardYieldOnCost: number,
      public marketDiff: number,
      public marketDiffInPercent: number
  ) {}
}
