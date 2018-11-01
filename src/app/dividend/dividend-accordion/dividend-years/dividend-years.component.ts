import { Component, OnInit, Input } from '@angular/core';
import { DividendService } from 'src/app/services/dividend/dividend.service';
import { DividendYearTableRowSummaryDto } from 'src/app/services/dto/dividend-years-table-row-summary.dto';

@Component({
  selector: 'app-dividend-years',
  templateUrl: './dividend-years.component.html',
  styleUrls: ['./dividend-years.component.sass']
})
export class DividendYearsComponent implements OnInit {
  @Input()
  year: string;
  @Input()
  chosenSymbol: string;

  dividendYearTableRowSummaryDtoArray: DividendYearTableRowSummaryDto[];

  constructor(private dividendService: DividendService) { }

  ngOnInit() {
    this.dividendService.symbolChangedSubject.subscribe(symbol => {
      this.dividendService.getDataOfYear(symbol, this.year).subscribe(
        dividendYearTableRowSummaryDtoArray => {
          this.dividendYearTableRowSummaryDtoArray = dividendYearTableRowSummaryDtoArray;
        }
      );
    });
  }
}
