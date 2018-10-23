import { Component, OnInit } from '@angular/core';

export interface Stock {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dividends',
  templateUrl: './dividends.component.html',
  styleUrls: ['./dividends.component.sass']
})
export class DividendsComponent implements OnInit {
  panelOpenState = false;

  stocks: Stock[] = [
    {value: 'stock-1', viewValue: 'Example Stock 1'},
    {value: 'stock-2', viewValue: 'Example Stock 2'},
    {value: 'stock-3', viewValue: 'Example Stock 3'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
