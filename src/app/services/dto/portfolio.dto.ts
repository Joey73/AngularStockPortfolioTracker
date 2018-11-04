import { PortfolioDetailsDto } from './portfolioDetails.dto';
import { PortfolioAnalysisDto } from './portfolioAnalysis.dto.';
import { PortfolioPositionDto } from './portfolio-position.dto';
import { PortfolioTradeDto } from './portfolio-trade.dto';
import { PortfolioDividendDto } from './portfolio-dividend.dto';
import { PortfolioStatisticDto } from './portfolio-statistic.dto';

export class PortfolioDto {
  constructor(
      public id: string,
      public title: string,
      public strategy: number,
      public profileId: number,
      public currencyCode: number,
      public posititons: PortfolioPositionDto[],
      public trades: PortfolioTradeDto[],
      public dividends: PortfolioDividendDto[],
      public statistic: PortfolioStatisticDto
  ) {}
}
