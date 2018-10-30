import { Injectable } from '@angular/core';
import { StockDto } from '../dto/stock.dto';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable, Subject } from 'rxjs';

const BASE_URL = 'http://ddb-web.herokuapp.com/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class DividendService {

  allStocksSubject: Subject<StockDto[]> = new Subject();

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
}
