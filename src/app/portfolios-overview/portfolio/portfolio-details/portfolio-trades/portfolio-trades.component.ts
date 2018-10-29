import { Component, OnInit, Input } from '@angular/core';
import { TradeDto } from 'src/app/services/dto/trade.dto';

export interface PeriodicElement {
  payDate: string;
  symbol: string;
  buyOrSell: string;
  amountOfShares: number;
  pricePerShare: number;
  priceTotal: number;
  fee: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {payDate: '2018-06-07', symbol: 'TestSymbol1', buyOrSell: 'buy', amountOfShares: 10, pricePerShare: 123, priceTotal: 1234, fee: 10},
  {payDate: '2018-09-28', symbol: 'TestSymbol2', buyOrSell: 'buy', amountOfShares: 20, pricePerShare: 321, priceTotal: 4321, fee: 10}
];

@Component({
  selector: 'app-portfolio-trades',
  templateUrl: './portfolio-trades.component.html',
  styleUrls: ['./portfolio-trades.component.sass']
})
export class PortfolioTradesComponent implements OnInit {
  @Input()
  trades: TradeDto[];

  displayedColumns: string[] = ['payDate', 'symbol', 'buyOrSell', 'amountOfShares', 'pricePerShare', 'priceTotal', 'fee'];
  // dataSource = ELEMENT_DATA;
  dataSource = this.trades;

  constructor() { }

  ngOnInit() {
    this.dataSource = this.trades;
  }

}
