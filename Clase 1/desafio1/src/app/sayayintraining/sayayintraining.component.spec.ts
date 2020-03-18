import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayayintrainingComponent } from './sayayintraining.component';

describe('SayayintrainingComponent', () => {
  let component: SayayintrainingComponent;
  let fixture: ComponentFixture<SayayintrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayayintrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayayintrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
