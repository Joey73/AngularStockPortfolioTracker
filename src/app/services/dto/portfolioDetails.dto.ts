import { PositionDto } from './position.dto';

export class PortfolioDetailsDto {
  constructor(
    public positionDtoArray: PositionDto[]
  ) {}
}
