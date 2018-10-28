import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTradesComponent } from './portfolio-trades.component';

describe('PortfolioTradesComponent', () => {
  let component: PortfolioTradesComponent;
  let fixture: ComponentFixture<PortfolioTradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioTradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
