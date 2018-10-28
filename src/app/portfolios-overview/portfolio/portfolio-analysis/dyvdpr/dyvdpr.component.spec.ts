import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyvdprComponent } from './dyvdpr.component';

describe('DyvdprComponent', () => {
  let component: DyvdprComponent;
  let fixture: ComponentFixture<DyvdprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyvdprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyvdprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
