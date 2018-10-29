import { Component, OnInit, Input } from '@angular/core';
import { DividendDto } from 'src/app/services/dto/dividend.dto';

@Component({
  selector: 'app-portfolio-dividends',
  templateUrl: './portfolio-dividends.component.html',
  styleUrls: ['./portfolio-dividends.component.sass']
})
export class PortfolioDividendsComponent implements OnInit {
  @Input()
  dividend: DividendDto;

  constructor() { }

  ngOnInit() {
  }

}
