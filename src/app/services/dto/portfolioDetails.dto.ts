import { PositionDto } from './position.dto';
import { TradeDto } from './trade.dto';
import { DividendDto } from './dividend.dto';

export class PortfolioDetailsDto {
  constructor(
    public positions: PositionDto[],
    public trades: TradeDto[],
    public dividends: DividendDto[]
  ) {}
}
