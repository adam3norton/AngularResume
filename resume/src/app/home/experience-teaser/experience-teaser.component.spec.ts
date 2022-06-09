import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceTeaserComponent } from './experience-teaser.component';

describe('ExperienceTeaserComponent', () => {
  let component: ExperienceTeaserComponent;
  let fixture: ComponentFixture<ExperienceTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceTeaserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
