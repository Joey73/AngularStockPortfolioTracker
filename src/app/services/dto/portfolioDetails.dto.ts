import { PositionDto } from './position.dto';
import { TradeDto } from './trade.dto';
import { PortfolioDividendDto } from './portfolio-dividend.dto';

export class PortfolioDetailsDto {
  constructor(
    public positions: PositionDto[],
    public trades: TradeDto[],
    public dividend: PortfolioDividendDto
  ) {}
}
