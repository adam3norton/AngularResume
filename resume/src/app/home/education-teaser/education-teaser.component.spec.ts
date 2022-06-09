import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationTeaserComponent } from './education-teaser.component';

describe('EducationTeaserComponent', () => {
  let component: EducationTeaserComponent;
  let fixture: ComponentFixture<EducationTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationTeaserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
