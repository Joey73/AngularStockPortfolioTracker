import { ImportantRatiosDto } from './importantRatios.dto';

export class PortfolioAnalysisDto {
  constructor(
    public importantRatios: ImportantRatiosDto[]
  ) {}
}
