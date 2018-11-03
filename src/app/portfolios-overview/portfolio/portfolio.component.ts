import { Component, OnInit, Input } from '@angular/core';
import { PortfolioDto } from 'src/app/services/dto/portfolio.dto';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {
  @Input()
  portfolioDto: PortfolioDto;

  showDetails = false;
  showAnalysis = false;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    // this.portfolioService.
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
