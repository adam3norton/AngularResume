import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './skills/all/all.component';
import { AutomationComponent } from './skills/automation/automation.component';
import { BrandDesignComponent } from './skills/brand-design/brand-design.component';
import { MachineLearningComponent } from './skills/machine-learning/machine-learning.component';
import { SkillsComponent } from './skills/skills.component';
import { UiComponent } from './skills/ui/ui.component';
import { WebDevComponent } from './skills/web-dev/web-dev.component';
import { WebScrapingComponent } from './skills/web-scraping/web-scraping.component';
import { VolunteerComponent } from './volunteer/volunteer.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'skills',
    component: SkillsComponent,
    children: [
      { path: 'all', component: AllComponent},
      { path: '', redirectTo: 'all', pathMatch: 'full'},
      { path: 'web-dev', component: WebDevComponent },
      { path: 'machine-learning', component: MachineLearningComponent },
      { path: 'brand-design', component: BrandDesignComponent },
      { path: 'web-scraping', component: WebScrapingComponent },
      { path: 'ui', component: UiComponent },
      { path: 'automation', component: AutomationComponent }

    ]
  },
  {
    path: 'education',
    component: EducationComponent,
    pathMatch: 'full'
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    pathMatch: 'full'
  },
  {
    path: 'volunteer',
    component: VolunteerComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
