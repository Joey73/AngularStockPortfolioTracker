import { Component, OnInit, Input } from '@angular/core';
import { PortfolioDetailsDto } from 'src/app/services/dto/portfolioDetails.dto';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.sass']
})
export class PortfolioDetailsComponent implements OnInit {
  @Input()
  portfolioDetails: PortfolioDetailsDto;

  displayMode = 'default';
  multi = false;

  constructor() { }

  ngOnInit() {
  }

}
