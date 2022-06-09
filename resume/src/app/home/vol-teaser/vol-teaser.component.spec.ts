import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolTeaserComponent } from './vol-teaser.component';

describe('VolTeaserComponent', () => {
  let component: VolTeaserComponent;
  let fixture: ComponentFixture<VolTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolTeaserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
