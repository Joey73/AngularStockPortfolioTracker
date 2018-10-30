import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';

import { DividendService } from '../services/dividend/dividend.service';
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

  dividendYears: number[];

  stockDtoArray: StockDto[];
  showDividendYears = false;

  constructor(private dividendService: DividendService) { }

  ngOnInit() {
    this.showDividendYears = false;

    this.dividendService.allStocksSubject.subscribe(
      stockDtoArray => {
        this.stockDtoArray = stockDtoArray;
      }
    );
    this.dividendService.getAllStocks().subscribe(data => {
      console.log(data);
    });
  }

  loadDataForStockChoice(choice: string) {
    console.log('Stock Choice: ' + choice);
    if (choice != null) {
      this.showDividendYears = true;
    } else {
      this.showDividendYears = false;
    }
  }
}
