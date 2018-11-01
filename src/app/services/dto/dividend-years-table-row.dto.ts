export class DividendYearTableRowDto {
  constructor(
    public id: number,
    public symbol: string,
    public numberOfShares: number,
    public amountPerShare: number,
    public payDate:
    {
      year: number,
      month: string,
      dayOfMonth: number,
      dayOfWeek: string,
      era: string,
      monthValue: number,
      chronology:
      {
        calendarType: string,
        id: string
      },
      dayOfYear: number,
      leapYear: boolean
    },
    public currency: string,
    public totalAmount: number
    ) {}
  }
