import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendYearsComponent } from './dividend-years.component';

describe('DividendYearsComponent', () => {
  let component: DividendYearsComponent;
  let fixture: ComponentFixture<DividendYearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendYearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
