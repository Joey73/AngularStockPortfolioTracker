import { Component, OnInit, Input } from '@angular/core';
import { PortfolioAnalysisDto } from 'src/app/services/dto/portfolioAnalysis.dto.';

@Component({
  selector: 'app-portfolio-analysis',
  templateUrl: './portfolio-analysis.component.html',
  styleUrls: ['./portfolio-analysis.component.sass']
})
export class PortfolioAnalysisComponent implements OnInit {
  @Input()
  portfolioAnalysis: PortfolioAnalysisDto;

  displayMode = 'default';
  multi = false;

  constructor() { }

  ngOnInit() {
  }
}
