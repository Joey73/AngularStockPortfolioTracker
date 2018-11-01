import { Injectable } from '@angular/core';
import { StockDto } from '../dto/stock.dto';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable, Subject } from 'rxjs';
import { DividendYearTableRowDto } from '../dto/dividend-years-table-row.dto';
import { DividendYearTableRowSummaryDto } from '../dto/dividend-years-table-row-summary.dto';

const BASE_URL = 'http://ddb-web.herokuapp.com/api/v1/';
// http://ddb-web.herokuapp.com/api/v1/dividends/MMM/2017
// http://ddb-web.herokuapp.com/api/v1/stocks/find/inter (find "inter")

@Injectable({
  providedIn: 'root'
})
export class DividendService {

  allStocksSubject: Subject<StockDto[]> = new Subject();
  dividendYearTableRowSummarySubject: Subject<DividendYearTableRowSummaryDto[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  public getAllStocks(): Observable<StockDto[]> {
    let allStocksObservable: Observable<StockDto[]>;
    allStocksObservable = this.httpClient.get<StockDto[]>(BASE_URL + 'stocks')
    .pipe(map(
      (stocks) => {
        /*
        for (const stock of stocks) {
          console.log(stock.name);
        }
        */
        return stocks;
      }
    ));
    allStocksObservable.subscribe(
      stocks => this.allStocksSubject.next(stocks),
      err => this.allStocksSubject.error(err)
    );
    return allStocksObservable;
  }

  public getDataOfYear(symbol: string, year: string) {
    let dividendYearTableRowSummaryObservable: Observable<DividendYearTableRowSummaryDto[]>;
    dividendYearTableRowSummaryObservable = this.httpClient
    .get<DividendYearTableRowDto[]>(BASE_URL + 'dividends/' + symbol + '/' + year)
    .pipe(map(
      (rows) => {
        return this.getDividentYearTableRowSummary(rows);
      }
      /*
      (rows) => {
        console.log('getDataOfYear(' + year + '):');
        for (const row of rows) {
          console.log(row.id);
          console.log(row.symbol);
          console.log(row.totalAmount);
        }
        return rows;
      }
      */
    )
    );
    dividendYearTableRowSummaryObservable.subscribe(
      rows => this.dividendYearTableRowSummarySubject.next(rows),
      err => this.dividendYearTableRowSummarySubject.error(err)
    );
    return dividendYearTableRowSummaryObservable;
  }

  getDividentYearTableRowSummary(rows: DividendYearTableRowDto[]): DividendYearTableRowSummaryDto[] {
    return rows.map(row => new DividendYearTableRowSummaryDto(
      row.id,
      row.symbol,
      row.payDate.dayOfMonth + row.payDate.month,
      row.amountPerShare,
      row.currency
    ));
  }
}
