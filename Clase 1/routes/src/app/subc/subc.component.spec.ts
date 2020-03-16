import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcComponent } from './subc.component';

describe('SubcComponent', () => {
  let component: SubcComponent;
  let fixture: ComponentFixture<SubcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
