import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio/portfolio.service';
import { PortfolioDto } from '../services/dto/portfolio.dto';

@Component({
  selector: 'app-portfolios-overview',
  templateUrl: './portfolios-overview.component.html',
  styleUrls: ['./portfolios-overview.component.sass']
})
export class PortfoliosOverviewComponent implements OnInit {
  portfolioDtoArray: PortfolioDto[];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.allPortfoliosSubject.subscribe(
      portfolioDtoArray => {
        this.portfolioDtoArray = portfolioDtoArray;
      }
    );

    this.portfolioService.getAllPortfolios().subscribe(data => {
      console.log(data);
    });
  }
}
