import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendAccordionComponent } from './dividend-accordion.component';

describe('DividendAccordionComponent', () => {
  let component: DividendAccordionComponent;
  let fixture: ComponentFixture<DividendAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
