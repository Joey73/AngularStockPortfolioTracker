import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio/portfolio.service';
import { PortfolioDto } from '../services/dto/portfolio.dto';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import {DataSource} from '@angular/cdk/collections';


@Component({
  selector: 'app-portfolios-overview',
  templateUrl: './portfolios-overview.component.html',
  styleUrls: ['./portfolios-overview.component.sass']
})
export class PortfoliosOverviewComponent implements OnInit {
  portfolioDtoArray: PortfolioDto[];
  private portfolioDataSource: PortfolioDataSource | null;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.allPortfoliosSubject.subscribe(
      portfolioDtoArray => {
        this.portfolioDtoArray = portfolioDtoArray;
        this.portfolioDataSource = new PortfolioDataSource(portfolioDtoArray);
      }
    );
    this.portfolioService.getAllDummyPortfolios().subscribe(data => {
      console.log(data);
    });
  }

}

export class PortfolioDataSource extends DataSource<PortfolioDto> {
  constructor(private portfolioDtoArray: PortfolioDto[]) {
    super();
  }

  connect(): Observable<PortfolioDto[]> {
    return of(this.portfolioDtoArray);
  }

  disconnect() {}
}
