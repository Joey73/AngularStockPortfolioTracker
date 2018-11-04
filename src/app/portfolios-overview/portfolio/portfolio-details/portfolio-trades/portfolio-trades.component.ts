import { Component, OnInit, Input } from '@angular/core';
import { PortfolioTradeDto } from 'src/app/services/dto/portfolio-trade.dto';

export interface PeriodicElement {
  payDate: string;
  symbol: string;
  buyOrSell: string;
  amountOfShares: number;
  pricePerShare: number;
  priceTotal: number;
  fee: number;
}

@Component({
  selector: 'app-portfolio-trades',
  templateUrl: './portfolio-trades.component.html',
  styleUrls: ['./portfolio-trades.component.sass']
})
export class PortfolioTradesComponent implements OnInit {
  @Input()
  trades: PortfolioTradeDto[];

  displayedColumns: string[] = ['tradeDate', 'symbol', 'action', 'numberOfShares', 'pricePerShare', 'totalTradeValue', 'commission'];
  dataSource = this.trades;

  constructor() { }

  ngOnInit() {
    this.dataSource = this.trades;
  }
}
