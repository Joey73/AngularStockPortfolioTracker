import { Component, OnInit, Input } from '@angular/core';
import { PortfolioPositionDto } from 'src/app/services/dto/portfolio-position.dto';

@Component({
  selector: 'app-portfolio-positions',
  templateUrl: './portfolio-positions.component.html',
  styleUrls: ['./portfolio-positions.component.sass']
})
export class PortfolioPositionsComponent implements OnInit {
  @Input()
  position: PortfolioPositionDto;

  myVariableColor = '#00FF00';
  constructor() { }

  ngOnInit() {
  }
}
