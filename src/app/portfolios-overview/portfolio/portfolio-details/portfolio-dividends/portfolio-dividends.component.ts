import { Component, OnInit, Input } from '@angular/core';
import { PortfolioDividendDto } from 'src/app/services/dto/portfolio-dividend.dto';

@Component({
  selector: 'app-portfolio-dividends',
  templateUrl: './portfolio-dividends.component.html',
  styleUrls: ['./portfolio-dividends.component.sass']
})
export class PortfolioDividendsComponent implements OnInit {
  @Input()
  dividend: PortfolioDividendDto;

  constructor() { }

  ngOnInit() {
  }

}
