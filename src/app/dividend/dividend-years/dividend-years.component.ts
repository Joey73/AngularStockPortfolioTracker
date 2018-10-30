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
  selector: 'app-dividend-years',
  templateUrl: './dividend-years.component.html',
  styleUrls: ['./dividend-years.component.sass']
})
export class DividendYearsComponent implements OnInit {
  displayedColumns: string[] = ['symbol', 'payDate', 'amount', 'currency'];
  dataSource = ELEMENT_DATA;

  displayMode = 'default';
  multi = false;
  hideToggle = false;
  disabled = false;
  showPanel3 = true;
  expandedHeight: string;
  collapsedHeight: string;

  constructor() { }

  ngOnInit() {
  }

}
