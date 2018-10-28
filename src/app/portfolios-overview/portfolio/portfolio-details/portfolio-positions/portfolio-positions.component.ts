import { Component, OnInit, Input } from '@angular/core';
import { PositionDto } from 'src/app/services/dto/position.dto';

@Component({
  selector: 'app-portfolio-positions',
  templateUrl: './portfolio-positions.component.html',
  styleUrls: ['./portfolio-positions.component.sass']
})
export class PortfolioPositionsComponent implements OnInit {
  @Input()
  position: PositionDto;

  myVariableColor = '#00FF00';
  constructor() { }

  ngOnInit() {
  }
}
