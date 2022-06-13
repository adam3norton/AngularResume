import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacePinsComponent } from './place-pins.component';

describe('PlacePinsComponent', () => {
  let component: PlacePinsComponent;
  let fixture: ComponentFixture<PlacePinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacePinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacePinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
