import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantRatiosComponent } from './important-ratios.component';

describe('ImportantRatiosComponent', () => {
  let component: ImportantRatiosComponent;
  let fixture: ComponentFixture<ImportantRatiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportantRatiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantRatiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
