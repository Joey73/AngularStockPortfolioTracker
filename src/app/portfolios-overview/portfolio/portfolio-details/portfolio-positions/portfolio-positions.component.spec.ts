import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPositionsComponent } from './portfolio-positions.component';

describe('PortfolioPositionsComponent', () => {
  let component: PortfolioPositionsComponent;
  let fixture: ComponentFixture<PortfolioPositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioPositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
