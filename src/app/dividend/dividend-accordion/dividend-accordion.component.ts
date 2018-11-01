import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dividend-accordion',
  templateUrl: './dividend-accordion.component.html',
  styleUrls: ['./dividend-accordion.component.sass']
})
export class DividendAccordionComponent implements OnInit {
  @Input()
  chosenSymbol: string;

  symbol: string;

  displayMode = 'default';
  multi = false;

  constructor() { }

  ngOnInit() {
    // console.log('----->Symbol: ' + this.chosenSymbol);
    this.symbol = this.chosenSymbol;
  }
}
