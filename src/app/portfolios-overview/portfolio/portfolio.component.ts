import { Component, OnInit, Input } from '@angular/core';
import { PortfolioDto } from 'src/app/services/dto/portfolio.dto';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {
  @Input()
  portfolioDto: PortfolioDto;

  showDetails = false;

  constructor() { }

  ngOnInit() {
  }

  onShowDetails() {
    if (this.showDetails === false) {
      this.showDetails = true;
    } else {
      this.showDetails = false;
    }
  }
}
