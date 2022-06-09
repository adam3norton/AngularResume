import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillWelcomeComponent } from './skill-welcome.component';

describe('SkillWelcomeComponent', () => {
  let component: SkillWelcomeComponent;
  let fixture: ComponentFixture<SkillWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
