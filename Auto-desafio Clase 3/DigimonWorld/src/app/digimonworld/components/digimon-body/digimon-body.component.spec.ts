import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonBodyComponent } from './digimon-body.component';

describe('DigimonBodyComponent', () => {
  let component: DigimonBodyComponent;
  let fixture: ComponentFixture<DigimonBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigimonBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
