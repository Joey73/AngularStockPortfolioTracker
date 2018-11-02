import { StockDto } from './stock.dto';

export class DividendStatisticsDto {
  constructor(
    public stock: StockDto,
    public growthRate: number,
    public growth5Y: number
    ) {}
  }
