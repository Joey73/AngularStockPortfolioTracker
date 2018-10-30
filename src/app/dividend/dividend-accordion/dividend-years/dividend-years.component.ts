import { Component, OnInit } from '@angular/core';
import { DividendService } from 'src/app/services/dividend/dividend.service';
import { DividendYearTableRowDto } from 'src/app/services/dto/dividend-years-table-row.dto';


@Component({
  selector: 'app-dividend-years',
  templateUrl: './dividend-years.component.html',
  styleUrls: ['./dividend-years.component.sass']
})
export class DividendYearsComponent implements OnInit {
  dividendYearTableRowDtoArray: DividendYearTableRowDto[];

  constructor(private dividendService: DividendService) { }

  ngOnInit() {
  }

  on() {
    this.dividendService.dividendYearTableRowSubject.subscribe(
      dividendYearTableRowDtoArray => {
        this.dividendYearTableRowDtoArray = dividendYearTableRowDtoArray;
      }
    );
  }

}
