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
    console.log('--->>>chosenSymbol: ' + this.chosenSymbol);
    this.dividendService.getDataOfYear(this.chosenSymbol, this.year).subscribe(
      dividendYearTableRowSummaryDtoArray => {
        console.log('***********************');
        console.log('Year: ' + this.year);
        console.log(dividendYearTableRowSummaryDtoArray);
        console.log('***********************');
        this.dividendYearTableRowSummaryDtoArray = dividendYearTableRowSummaryDtoArray;
      }
    );
  }
}
