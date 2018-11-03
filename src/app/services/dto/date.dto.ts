import { ChronologyDto } from './chronology.dto';

export class DateDto {
  constructor(
    public year: number,
    public month: string,
    public dayOfYear: number,
    public leapYear: boolean,
    public monthValue: number,
    public dayOfMonth: number,
    public dayOfWeek: string,
    public era: string,
    public chronology: ChronologyDto
  ) {}
}
