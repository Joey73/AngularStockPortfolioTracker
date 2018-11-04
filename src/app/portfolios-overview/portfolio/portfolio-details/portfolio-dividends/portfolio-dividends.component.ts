import { Component, OnInit, Input } from '@angular/core';
import { PortfolioDividendDto } from 'src/app/services/dto/portfolio-dividend.dto';

@Component({
  selector: 'app-portfolio-dividends',
  templateUrl: './portfolio-dividends.component.html',
  styleUrls: ['./portfolio-dividends.component.sass']
})
export class PortfolioDividendsComponent implements OnInit {
  @Input()
  dividends: PortfolioDividendDto[];

  displayedColumns: string[] = ['payDate', 'symbol', 'numberOfShares', 'amountPerShare', 'currency', 'totalAmount'];
  // dataSource = ELEMENT_DATA;
  dataSource = this.dividends;

  constructor() { }

  ngOnInit() {
    this.dataSource = this.dividends;
  }
}
