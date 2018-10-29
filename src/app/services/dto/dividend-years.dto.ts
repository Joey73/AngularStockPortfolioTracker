import { DividendYearTableRowDto } from './dividend-years-table-row.dto';

export class DividendYearsDto {
  constructor(
    public id: number,
    public year: number,
    public totalAmount: number,
    public dividendYearTableRows: DividendYearTableRowDto[]
  ) {}
}
