import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FydgvfyrgComponent } from './fydgvfyrg.component';

describe('FydgvfyrgComponent', () => {
  let component: FydgvfyrgComponent;
  let fixture: ComponentFixture<FydgvfyrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FydgvfyrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FydgvfyrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
