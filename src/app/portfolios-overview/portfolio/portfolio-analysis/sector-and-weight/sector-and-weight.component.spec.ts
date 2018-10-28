import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorAndWeightComponent } from './sector-and-weight.component';

describe('SectorAndWeightComponent', () => {
  let component: SectorAndWeightComponent;
  let fixture: ComponentFixture<SectorAndWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorAndWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorAndWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
