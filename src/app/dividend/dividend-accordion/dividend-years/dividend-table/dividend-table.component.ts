import { Component, OnInit, Input } from '@angular/core';
import { DividendYearTableRowDto } from 'src/app/services/dto/dividend-years-table-row.dto';
import { DividendYearTableRowSummaryDto } from 'src/app/services/dto/dividend-years-table-row-summary.dto';
import { DividendService } from 'src/app/services/dividend/dividend.service';

export interface PeriodicElement {
  symbol: string;
  payDate: string;
  amount: number;
  currency: string;
}

/*
const ELEMENT_DATA: PeriodicElement[] = [
  {symbol: 'TestSymbol1', payDate: '01.01.2019', amount: 10, currency: 'EURO'},
  {symbol: 'TestSymbol2', payDate: '01.01.2019', amount: 10, currency: 'EURO'},
];
*/

@Component({
  selector: 'app-dividend-table',
  templateUrl: './dividend-table.component.html',
  styleUrls: ['./dividend-table.component.sass']
})
export class DividendTableComponent implements OnInit {
  // @Input()
  // dividendYearTableRowSummaryDtoArray: DividendYearTableRowSummaryDto[];
  @Input()
  year: string;

  dividendYearTableRowSummaryDtoArray: DividendYearTableRowSummaryDto[];

  displayedColumns: string[] = ['symbol', 'payDate', 'amount', 'currency'];
  dataSource = null;

  constructor(private dividendService: DividendService) { }

  ngOnInit() {
    this.dividendService.symbolChangedSubject.subscribe(symbol => {
      // console.log('dividend-table:');
      // console.log('Symbol: ' + symbol);
      // console.log('Year: ' + this.year);
      this.dividendService.getDataOfYear(symbol, this.year).subscribe(
        dividendYearTableRowSummaryDtoArray => {
          console.log(dividendYearTableRowSummaryDtoArray);
          this.dividendYearTableRowSummaryDtoArray = dividendYearTableRowSummaryDtoArray;
          this.dataSource = this.dividendYearTableRowSummaryDtoArray;
        }
      );
    });
  }
}
