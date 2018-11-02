import { Injectable } from '@angular/core';
import { StockDto } from '../dto/stock.dto';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { DividendYearTableRowDto } from '../dto/dividend-years-table-row.dto';
import { DividendYearTableRowSummaryDto } from '../dto/dividend-years-table-row-summary.dto';
import { DividendAnnualDto } from '../dto/dividend-annual.dto';
import { DividendStatisticsDto } from '../dto/dividend-statistics.dto';

const BASE_URL = 'http://ddb-web.herokuapp.com/api/v1/';
// http://ddb-web.herokuapp.com/api/v1/dividends/MMM/2017
// http://ddb-web.herokuapp.com/api/v1/stocks/find/inter (find "inter")

@Injectable({
  providedIn: 'root'
})
export class DividendService {
  symbol: string;

  dividendStatisticsSubject: Subject<DividendStatisticsDto> = new Subject();
  dividendAnnualSubject: Subject<DividendAnnualDto> = new Subject();
  allStocksSubject: Subject<StockDto[]> = new Subject();
  dividendYearTableRowSummarySubject: Subject<DividendYearTableRowSummaryDto[]> = new Subject();

  symbolChangedSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private httpClient: HttpClient) { }

  public changeSymbol(newSymbol: string) {
    this.symbol = newSymbol;
    this.symbolChangedSubject.next(newSymbol);
  }

  public getAllStocks(): Observable<StockDto[]> {
    let allStocksObservable: Observable<StockDto[]>;
    allStocksObservable = this.httpClient.get<StockDto[]>(BASE_URL + 'stocks')
    .pipe(map(
      (stocks) => {
        return stocks;
      }
    ));
    allStocksObservable.subscribe(
      stocks => this.allStocksSubject.next(stocks),
      err => this.allStocksSubject.error(err)
    );
    return allStocksObservable;
  }

  public getDividendStatistics(symbol: string): Observable<DividendStatisticsDto> {
    let dividendStatisticsObservable: Observable<DividendStatisticsDto>;
    dividendStatisticsObservable = this.httpClient.get<DividendStatisticsDto>(BASE_URL + 'dividends/' + symbol + '/statistics')
    .pipe(map(
      (data) => {
        console.log('data.growthRate: ' + data.growthRate);
        console.log('data.growth5Y: ' + data.growth5Y);
        return data;
      }
    ));
    dividendStatisticsObservable.subscribe(
      data => this.dividendStatisticsSubject.next(data),
      err => this.dividendStatisticsSubject.error(err)
    );
    return dividendStatisticsObservable;
  }

  public getDividendAnnual(symbol: string, year: string): Observable<DividendAnnualDto> {
    let dividendAnnualObservable: Observable<DividendAnnualDto>;
    dividendAnnualObservable = this.httpClient.get<DividendAnnualDto>(BASE_URL + 'dividends/' + symbol + '/' + year + '/annual')
    .pipe(map(
      (data) => {
        return data;
      }
    ));
    dividendAnnualObservable.subscribe(
      data => this.dividendAnnualSubject.next(data),
      err => this.dividendAnnualSubject.error(err)
    );
    return dividendAnnualObservable;
  }

  public getDataOfYear(symbol: string, year: string) {
    let dividendYearTableRowSummaryObservable: Observable<DividendYearTableRowSummaryDto[]>;
    dividendYearTableRowSummaryObservable = this.httpClient
    .get<DividendYearTableRowDto[]>(BASE_URL + 'dividends/' + symbol + '/' + year)
    .pipe(map(
      (rows) => {
        return this.getDividentYearTableRowSummary(rows);
      }
    ));
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
      row.payDate.dayOfMonth + '. ' + row.payDate.month + ' ' + row.payDate.year,
      row.amountPerShare,
      row.currency
    ));
  }
}
