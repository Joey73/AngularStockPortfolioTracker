import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
import { of } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';

import { DividendService } from '../services/dividend/dividend.service';
import { Observable } from 'rxjs';
import { StockDto } from '../services/dto/stock.dto';

export interface Stock {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dividend',
  templateUrl: './dividend.component.html',
  styleUrls: ['./dividend.component.sass']
})
export class DividendComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  stockDtoArray: StockDto[];
  showDividendYears = false;
  private stockDataSource: StockDataSource | null;

  /*
  stocks: Stock[] = [
    {value: 'stock-1', viewValue: 'Example Stock 1'},
    {value: 'stock-2', viewValue: 'Example Stock 2'},
    {value: 'stock-3', viewValue: 'Example Stock 3'}
  ];
*/

  constructor(private dividendService: DividendService) { }

  ngOnInit() {
    this.showDividendYears = false;

    this.dividendService.allStocksSubject.subscribe(
      stockDtoArray => {
        this.stockDtoArray = stockDtoArray;
        this.stockDataSource = new StockDataSource(stockDtoArray);
      }
    );
    this.dividendService.getAllStocks().subscribe(data => {
      console.log(data);
    });
  }

  loadDataForStockChoice(choiceValue: string) {
    console.log('Stock Choice: ' + choiceValue);
    if (choiceValue != null){
      this.showDividendYears = true;
    } else {
      this.showDividendYears = false;
    }
  }
}

export class StockDataSource extends DataSource<StockDto> {
  constructor(private stockDtoArray: StockDto[]) {
    super();
  }

  connect(): Observable<StockDto[]> {
    return of(this.stockDtoArray);
  }

  disconnect() {}
}
