import { DividendYearsDto } from './dividend-years.dto';

export class PortfolioDto {
  constructor(
      public id: number,
      public stock: string,
      public companyName: number,
      public dividendGrowthRate: number,
      public fiveYearsDividendGrowth: number,
      public dividendYears: DividendYearsDto[]
  ) {}
}
