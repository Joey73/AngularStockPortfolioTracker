import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';

export interface Stock {
  value: string;
  viewValue: string;
}

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
  selector: 'app-dividends',
  templateUrl: './dividends.component.html',
  styleUrls: ['./dividends.component.sass']
})
export class DividendsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  stocks: Stock[] = [
    {value: 'stock-1', viewValue: 'Example Stock 1'},
    {value: 'stock-2', viewValue: 'Example Stock 2'},
    {value: 'stock-3', viewValue: 'Example Stock 3'}
  ];

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
