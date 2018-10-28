import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDividendsComponent } from './portfolio-dividends.component';

describe('PortfolioDividendsComponent', () => {
  let component: PortfolioDividendsComponent;
  let fixture: ComponentFixture<PortfolioDividendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioDividendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDividendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
