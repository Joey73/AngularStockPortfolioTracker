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

  stockDtoArray: StockDto[];
  showDividendAccordion = false;
  chosenSymbol: string;

  constructor(private dividendService: DividendService) { }

  ngOnInit() {
    this.showDividendAccordion = false;

    this.dividendService.allStocksSubject.subscribe(
      stockDtoArray => {
        this.stockDtoArray = stockDtoArray;
      }
    );
    this.dividendService.getAllStocks().subscribe(data => {
      console.log(data);
    });
  }

  onSelectionChange(choice: string) {
    this.loadDataForStockChoice(choice);

    if (choice != null) {
      this.chosenSymbol = choice;
      this.showDividendAccordion = true;
    } else {
      this.showDividendAccordion = false;
    }
  }

  loadDataForStockChoice(choice: string) {
    console.log('Stock Choice: ' + choice);
  }
}
