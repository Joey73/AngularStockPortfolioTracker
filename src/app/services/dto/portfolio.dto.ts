import { PortfolioDetailsDto } from './portfolioDetails.dto';

export class PortfolioDto {
  constructor(
      public id: number,
      public portfolioName: string,
      public portfolioMarketValue: number,
      public totalCost: number,
      public effectiveCost: number,
      public forwardAnnualDividends: number,
      public dividendsCollectedThisYear: number,
      public dividendsCollectedPreviousYear: number,
      public totalIncome: number,
      public totalIncomeInPercent: number,
      public portfolioDetails: PortfolioDetailsDto
  ) {}
}
