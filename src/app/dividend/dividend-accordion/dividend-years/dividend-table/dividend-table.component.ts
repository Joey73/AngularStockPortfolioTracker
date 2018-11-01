import { Component, OnInit, Input } from '@angular/core';
import { DividendYearTableRowDto } from 'src/app/services/dto/dividend-years-table-row.dto';
import { DividendYearTableRowSummaryDto } from 'src/app/services/dto/dividend-years-table-row-summary.dto';

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
  @Input()
  dividendYearTableRowSummaryDtoArray: DividendYearTableRowSummaryDto[];

  displayedColumns: string[] = ['symbol', 'payDate', 'amount', 'currency'];
  dataSource = this.dividendYearTableRowSummaryDtoArray;

  constructor() { }

  ngOnInit() {
    /*
    console.log('---> dividendYearTableRowSummaryDtoArray:');
    this.dividendYearTableRowSummaryDtoArray.forEach(element => {
      console.log(element.symbol);
      console.log(element.id);
      console.log(element.amount);
    });
    */
    this.dataSource = this.dividendYearTableRowSummaryDtoArray;
  }

}
