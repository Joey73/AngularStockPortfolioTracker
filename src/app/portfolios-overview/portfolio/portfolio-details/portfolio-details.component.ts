import { Component, OnInit, Input } from '@angular/core';
import { PortfolioDto } from 'src/app/services/dto/portfolio.dto';
import { PortfolioDetailsDto } from 'src/app/services/dto/portfolioDetails.dto';
import { PositionDto } from 'src/app/services/dto/position.dto';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.sass']
})
export class PortfolioDetailsComponent implements OnInit {
  @Input()
  portfolioDetailsDto: PortfolioDetailsDto;

  displayMode = 'default';
  multi = false;
  hideToggle = false;
  disabled = false;
  showPanel3 = true;
  expandedHeight: string;
  collapsedHeight: string;

  constructor() { }

  ngOnInit() {
  }

}
