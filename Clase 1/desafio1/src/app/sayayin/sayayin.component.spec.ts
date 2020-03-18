import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayayinComponent } from './sayayin.component';

describe('SayayinComponent', () => {
  let component: SayayinComponent;
  let fixture: ComponentFixture<SayayinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayayinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayayinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
