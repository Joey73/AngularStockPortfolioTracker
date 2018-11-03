import { Component, OnInit, Input } from '@angular/core';
import { PortfolioDto } from 'src/app/services/dto/portfolio.dto';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';
import { PortfolioDetailsDto } from 'src/app/services/dto/portfolioDetails.dto';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {
  @Input()
  portfolioDetailsDto: PortfolioDetailsDto;

  showDetails = false;
  showAnalysis = false;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.portfolioDetailsSubject.subscribe(
      portfolioDetailsDto => {
        this.portfolioDetailsDto = portfolioDetailsDto;
      }
    );
  }

  onShowDetails() {
    this.portfolioService.getPortfolioDetails('92a8053d-182f-4a3a-8c20-a06aa5ed00bd').subscribe(data => {
      console.log(data);
    });

    if (this.showDetails === false) {
      this.showAnalysis = false;
      this.showDetails = true;
    } else {
      this.showDetails = false;
    }
  }

  onShowAnalysis() {
    if (this.showAnalysis === false) {
      this.showDetails = false;
      this.showAnalysis = true;
    } else {
      this.showAnalysis = false;
    }
  }
}
