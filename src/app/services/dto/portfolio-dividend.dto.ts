import { DateDto } from './date.dto';

export class PortfolioDividendDto {
  constructor(
    public id: string,
    public symbol: string,
    public numberOfShares: number,
    public amountPerShare: number,
    public payDate: DateDto,
    public currency: string,
    public totalAmount: number
  ) {}
}
