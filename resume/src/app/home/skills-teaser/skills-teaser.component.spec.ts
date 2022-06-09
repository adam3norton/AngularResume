import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTeaserComponent } from './skills-teaser.component';

describe('SkillsTeaserComponent', () => {
  let component: SkillsTeaserComponent;
  let fixture: ComponentFixture<SkillsTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsTeaserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
