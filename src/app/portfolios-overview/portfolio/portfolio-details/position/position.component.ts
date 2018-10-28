import { Component, OnInit, Input } from '@angular/core';
import { PositionDto } from 'src/app/services/dto/position.dto';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.sass']
})
export class PositionComponent implements OnInit {
  @Input()
  position: PositionDto;

  myVariableColor = '#00FF00';
  constructor() { }

  ngOnInit() {
  }

}
