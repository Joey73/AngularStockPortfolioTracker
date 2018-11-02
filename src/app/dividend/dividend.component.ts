import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';

import { DividendService } from '../services/dividend/dividend.service';
import { StockDto } from '../services/dto/stock.dto';
import { DividendStatisticsDto } from '../services/dto/dividend-statistics.dto';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

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

  myControl = new FormControl();
  filteredStockDtos: Observable<StockDto[]>;

  stockDtoArray: StockDto[];
  dividendStatisticsDto: DividendStatisticsDto;
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

    this.dividendService.dividendStatisticsSubject.subscribe(dividendStatisticsDto => {
      this.dividendStatisticsDto = dividendStatisticsDto;
    });

    this.filteredStockDtos = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this.filter(value))
    );
  }

  private filter(value: string): StockDto[] {
    const filterValue = value.toLowerCase();
    if (this.stockDtoArray == null) {
      return null;
    }

    return this.stockDtoArray.filter(stockDto => stockDto.name.toLowerCase().includes(filterValue));
  }

  /*
  onSelectionChange(choice: string) {
    this.loadDataForStockChoice(choice);

    if (choice != null) {
      this.chosenSymbol = choice;
      this.showDividendAccordion = true;
      this.dividendService.changeSymbol(this.chosenSymbol);
    } else {
      this.showDividendAccordion = false;
    }
  }
  */

  loadDataForStockChoice(choice: string) {
    console.log('Stock Choice: ' + choice);
    this.dividendService.getDividendStatistics(choice);
  }

  onEnter(choice: string) {
    console.log('onEnter: ' + choice);

    this.loadDataForStockChoice(choice);

    if (choice != null) {
      this.chosenSymbol = choice;
      this.showDividendAccordion = true;
      this.dividendService.changeSymbol(this.chosenSymbol);
    } else {
      this.showDividendAccordion = false;
    }
  }
}
