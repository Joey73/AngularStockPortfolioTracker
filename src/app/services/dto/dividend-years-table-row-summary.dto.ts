export class DividendYearTableRowSummaryDto {
  constructor(
    public id: number,
    public symbol: string,
    public payDate: string,
    public amount: number,
    public currency: string
    ) {}
  }
