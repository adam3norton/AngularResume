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
import { AllWebDevComponent } from './skills/web-dev/all/all.component';
import { DirectivesComponent } from './skills/web-dev/directives/directives.component';
import { GeofenceComponent } from './skills/web-dev/geofence/geofence.component';
import { HttpComponent } from './skills/web-dev/http/http.component';
import { InputComponent } from './skills/web-dev/input/input.component';
import { MatTableComponent } from './skills/web-dev/mat-table/mat-table.component';
import { OperatorsComponent } from './skills/web-dev/operators/operators.component';
import { PlacePinsComponent } from './skills/web-dev/place-pins/place-pins.component';
import { BandComponent } from './skills/web-dev/routeparams/band/band.component';
import { RouteparamsComponent } from './skills/web-dev/routeparams/routeparams.component';
import { SubscribeComponent } from './skills/web-dev/subscribe/subscribe.component';
import { WebDevComponent } from './skills/web-dev/web-dev.component';
import { WebScrapingComponent } from './skills/web-scraping/web-scraping.component';
import { VolunteerComponent } from './volunteer/volunteer.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, pathMatch: 'full'},

  {path: 'skills', component: SkillsComponent, pathMatch: 'full'},

  // Skill Routes
  {path: 'all_skills', component: AllComponent, pathMatch: 'full'},
  {path: 'machine_learning', component: MachineLearningComponent, pathMatch: 'full' },
  {path: 'brand_design', component: BrandDesignComponent, pathMatch: 'full' },
  {path: 'web_scraping', component: WebScrapingComponent, pathMatch: 'full' },
  {path: 'ui', component: UiComponent, pathMatch: 'full' },
  {path: 'automation', component: AutomationComponent, pathMatch: 'full' },
  {path: 'web_dev', component: WebDevComponent, pathMatch: 'full'},

  // Web Dev Routes
  {path: 'pins', component: PlacePinsComponent, pathMatch: 'full'},
  {path: 'subscribe', component: SubscribeComponent, pathMatch: 'full'},
  {path: 'operators', component: OperatorsComponent, pathMatch: 'full'},
  {path: 'input', component: InputComponent, pathMatch: 'full'},
  {path: 'directives', component: DirectivesComponent, pathMatch: 'full'},
  {path: 'http', component: HttpComponent, pathMatch: 'full'},
  {path: 'routeparams', component: RouteparamsComponent, pathMatch: 'full'},
  {path: 'band/:id', component: BandComponent, pathMatch: 'full'},
  {path: 'table', component: MatTableComponent, pathMatch: 'full'},
  {path: 'geofence', component: GeofenceComponent, pathMatch: 'full'},
  {path: 'allweb', component: AllWebDevComponent, pathMatch: 'full'},

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
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
