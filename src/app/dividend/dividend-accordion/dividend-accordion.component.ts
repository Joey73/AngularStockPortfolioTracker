import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dividend-accordion',
  templateUrl: './dividend-accordion.component.html',
  styleUrls: ['./dividend-accordion.component.sass']
})
export class DividendAccordionComponent implements OnInit {
  displayMode = 'default';
  multi = false;

  constructor() { }

  ngOnInit() {
  }

}
