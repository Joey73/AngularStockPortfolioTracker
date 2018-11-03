import { DateDto } from './date.dto';

export class PortfolioTradeDto {
  constructor(
    public id: string,
    public symbol: string,
    public tradeDate: DateDto,
    public action: string,
    public numberOfShares: number,
    public pricePerShare: number,
    public totalTradeValue: number,
    public commission: number,
    public notes: string,
    public portfolioId: string
  ) {}
}
