import { PortfolioPositionDto } from './portfolio-position.dto';
import { PortfolioTradeDto } from './portfolio-trade.dto';
import { PortfolioDividendDto } from './portfolio-dividend.dto';
import { PortfolioStatisticDto } from './portfolio-statistic.dto';

export class PortfolioDetailsDto {
  constructor(
    public id: string,
    public title: string,
    public strategy: string,
    public profileId: number,
    public positions: PortfolioPositionDto[],
    public trades: PortfolioTradeDto[],
    public dividends: PortfolioDividendDto[],
    public statistic: PortfolioStatisticDto
  ) {}
}
