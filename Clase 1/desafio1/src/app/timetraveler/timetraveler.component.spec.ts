import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetravelerComponent } from './timetraveler.component';

describe('TimetravelerComponent', () => {
  let component: TimetravelerComponent;
  let fixture: ComponentFixture<TimetravelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetravelerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetravelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
