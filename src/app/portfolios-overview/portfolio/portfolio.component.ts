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
  portfolio: PortfolioDto;

  portfolioDetails: PortfolioDetailsDto;

  showDetails = false;
  showAnalysis = false;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    /*
    this.portfolioService.portfolioDetailsSubject.subscribe(
      portfolioDetailsDto => {
        // console.log('-------------------');
        this.portfolioDetails = portfolioDetailsDto;
        console.log('--- this.portfolioDetails.id: ' + this.portfolioDetails.id);
      }
    );
    */
    this.portfolioService.getPortfolioDetails(this.portfolio.id);
    this.portfolioService.getPortfolioDetails(this.portfolio.id).subscribe(data => {
      this.portfolioDetails = data;
      console.log('PortfolioDetails for id: ' + data.id);
      // console.log(data);
    });
  }

  onShowDetails() {
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
