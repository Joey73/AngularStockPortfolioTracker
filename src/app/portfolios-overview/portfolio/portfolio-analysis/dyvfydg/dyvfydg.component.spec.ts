import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyvfydgComponent } from './dyvfydg.component';

describe('DyvfydgComponent', () => {
  let component: DyvfydgComponent;
  let fixture: ComponentFixture<DyvfydgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyvfydgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyvfydgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
