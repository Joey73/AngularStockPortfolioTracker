import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { PortfolioDto } from '../dto/portfolio.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASE_URL = 'http://localhost:8080/stock/';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  @Output() portfolioDtoArrayEventEmitter: EventEmitter<PortfolioDto[]> = new EventEmitter();

  allPortfoliosSubject: Subject<PortfolioDto[]> = new Subject();
  numberOfPortfoliosSubject: Subject<number> = new Subject();

  constructor(private httpClient: HttpClient) { }

  // GET
  getAllDummyPortfolios(): Observable<PortfolioDto[]> {
    console.log('start getAllDummyPortfolios()');
    let allPortfoliosObservable: Observable<PortfolioDto[]>;

    allPortfoliosObservable = this.httpClient.get<PortfolioDto[]>('assets/dummy-data/all-portfolios.json')
    .pipe(map(
      (portfolios) => {
        /*
        for (const portfolio of portfolios) {
          console.log('getAllDummyPortfolios()-Porfolio.Id: ' + portfolio.id);
          console.log('getAllDummyPortfolios()-Porfolio.portfolioMarketValue: ' + portfolio.portfolioMarketValue);
        }
        */
        this.numberOfPortfoliosSubject.next(portfolios.length);
        return portfolios;
      }
    ));
    allPortfoliosObservable.subscribe(
      result => this.allPortfoliosSubject.next(result),
      err => this.allPortfoliosSubject.error(err)
    );
    return allPortfoliosObservable;
  }

  public getAllPortfolios(): Observable<PortfolioDto[]> {
    return this.httpClient.get<PortfolioDto[]>(BASE_URL + 'portfolio')
    .pipe(map(
      (result) => {
        console.log('getAllPortfolios - result.length: ' + result.length);
        this.portfolioDtoArrayEventEmitter.emit(result);
        return result;
      }
    ));
  }

  // ADD
  public addPortfolio(portfolioDto: PortfolioDto) {
    const url: string = BASE_URL + 'portfolio/create';
    const headers = new HttpHeaders().set('Content-Type', 'application/json' );
    const body = `
    {
      "id": "${portfolioDto.id}"
    }
    `;
    console.log('addPortfolio() - body: ' + body);
    console.log('addPortfolio() - URL: ' + url);
    return this.httpClient.post(url, body, {headers})
    .subscribe(
      () => {
        this.getAllPortfoliosSubscription();
      },
      err => console.error(err)
    );
  }

  // UPDATE
  public updatePortfolio(portfolioDto: PortfolioDto) {
    const url: string = BASE_URL + 'portfolio/' + portfolioDto.id;
    const headers = new HttpHeaders().set('Content-Type', 'application/json' );
    const body = `
    {
      "portfolioId": "${portfolioDto.id}"
    }
    `;
    console.log('updatePortfolio() - body: ' + body);
    console.log('updatePortfolio() - URL: ' + url);
    return this.httpClient.put(url, body, {headers})
    .subscribe(
      () => {},
      err => console.error(err)
    );
  }

  // DELETE
  public deletePortfolio(portfolioDto: PortfolioDto) {
    const url: string = BASE_URL + 'portfolio/' + portfolioDto.id;
    const headers = new HttpHeaders().set('Content-Type', 'application/json' );
    console.log('updatePortfolio() - URL: ' + url);
    this.httpClient.delete(url, {headers})
    .subscribe(
      () => {
        this.getAllPortfoliosSubscription();
      },
      err => console.error(err)
    );
  }

  private getAllPortfoliosSubscription() {
    this.getAllPortfolios().subscribe(
      () => {},
      (error) => console.log(error)
    );
  }
}
