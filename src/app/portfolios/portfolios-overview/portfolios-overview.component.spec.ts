import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliosOverviewComponent } from './portfolios-overview.component';

describe('PortfoliosOverviewComponent', () => {
  let component: PortfoliosOverviewComponent;
  let fixture: ComponentFixture<PortfoliosOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfoliosOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliosOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
