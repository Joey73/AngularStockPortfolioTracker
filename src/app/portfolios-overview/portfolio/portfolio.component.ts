import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {
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
