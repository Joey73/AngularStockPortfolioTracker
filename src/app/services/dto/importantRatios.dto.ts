
export class ImportantRatiosDto {
  constructor(
    public symbol: string,
    public name: string,
    public dividendYield: number,
    public dprInPercent: number,
    public roeInPercent: number,
    public peInPercent: number
  ) {}
}
