import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PervfyigComponent } from './pervfyig.component';

describe('PervfyigComponent', () => {
  let component: PervfyigComponent;
  let fixture: ComponentFixture<PervfyigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PervfyigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PervfyigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
