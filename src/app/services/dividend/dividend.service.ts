import { Injectable } from '@angular/core';
import { StockDto } from '../dto/stock.dto';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable, Subject } from 'rxjs';
import { DividendYearTableRowDto } from '../dto/dividend-years-table-row.dto';

const BASE_URL = 'http://ddb-web.herokuapp.com/api/v1/';
// http://ddb-web.herokuapp.com/api/v1/dividends/MMM/2017
// http://ddb-web.herokuapp.com/api/v1/stocks/find/inter (find "inter")

@Injectable({
  providedIn: 'root'
})
export class DividendService {

  allStocksSubject: Subject<StockDto[]> = new Subject();
  dividendYearTableRowSubject: Subject<DividendYearTableRowDto[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  public getAllStocks(): Observable<StockDto[]> {
    let allStocksObservable: Observable<StockDto[]>;
    allStocksObservable = this.httpClient.get<StockDto[]>(BASE_URL + 'stocks')
    .pipe(map(
      (stocks) => {
        for (const stock of stocks) {
          console.log(stock.name);
        }
        return stocks;
      }
    ));
    allStocksObservable.subscribe(
      stocks => this.allStocksSubject.next(stocks),
      err => this.allStocksSubject.error(err)
    );
    return allStocksObservable;
  }

  public getDataOfYear(year: number) {
    let dividendYearTableRowObservable: Observable<DividendYearTableRowDto[]>;
    dividendYearTableRowObservable = this.httpClient.get<DividendYearTableRowDto[]>(BASE_URL + 'dividends/MMM/2017')
    .pipe(map(
      (rows) => {
        for (const row of rows) {
          console.log(row.id);
          console.log(row.symbol);
          console.log(row.amount);
        }
        return rows;
      }
    ));
    dividendYearTableRowObservable.subscribe(
      rows => this.dividendYearTableRowSubject.next(rows),
      err => this.dividendYearTableRowSubject.error(err)
    );
    return ;
  }
}
