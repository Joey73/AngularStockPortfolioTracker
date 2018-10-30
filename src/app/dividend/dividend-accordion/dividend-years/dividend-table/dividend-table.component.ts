import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  symbol: string;
  payDate: string;
  amount: number;
  currency: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {symbol: 'TestSymbol1', payDate: '01.01.2019', amount: 10, currency: 'EURO'},
  {symbol: 'TestSymbol2', payDate: '01.01.2019', amount: 10, currency: 'EURO'},
];

@Component({
  selector: 'app-dividend-table',
  templateUrl: './dividend-table.component.html',
  styleUrls: ['./dividend-table.component.sass']
})
export class DividendTableComponent implements OnInit {
  displayedColumns: string[] = ['symbol', 'payDate', 'amount', 'currency'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
