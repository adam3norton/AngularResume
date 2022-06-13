import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Services
import { pinService } from './shared/pins.service';
import { dogService } from './shared/dog.service';

// Modules and Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { EducationTeaserComponent } from './home/education-teaser/education-teaser.component';
import { ExperienceTeaserComponent } from './home/experience-teaser/experience-teaser.component';
import { SkillsTeaserComponent } from './home/skills-teaser/skills-teaser.component';
import { VolTeaserComponent } from './home/vol-teaser/vol-teaser.component';
import { TickerComponent } from './home/ticker/ticker.component';
import { SkillWelcomeComponent } from './home/skill-welcome/skill-welcome.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { EducationComponent } from './education/education.component';
import { WebDevComponent } from './skills/web-dev/web-dev.component';
import { MachineLearningComponent } from './skills/machine-learning/machine-learning.component';
import { BrandDesignComponent } from './skills/brand-design/brand-design.component';
import { WebScrapingComponent } from './skills/web-scraping/web-scraping.component';
import { UiComponent } from './skills/ui/ui.component';
import { AutomationComponent } from './skills/automation/automation.component';
import { AllComponent } from './skills/all/all.component';
import { PlacePinsComponent } from './skills/web-dev/place-pins/place-pins.component';
import { SubscribeComponent } from './skills/web-dev/subscribe/subscribe.component';
import { AllWebDevComponent } from './skills/web-dev/all/all.component';
import { DirectivesComponent } from './skills/web-dev/directives/directives.component';
import { OperatorsComponent } from './skills/web-dev/operators/operators.component';
import { HttpComponent } from './skills/web-dev/http/http.component';
import { InputComponent } from './skills/web-dev/input/input.component';
import { RouteparamsComponent } from './skills/web-dev/routeparams/routeparams.component';
import { GeofenceComponent } from './skills/web-dev/geofence/geofence.component';

// Material Imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ChildComponent } from './skills/web-dev/input/child/child.component';
import { BandComponent } from './skills/web-dev/routeparams/band/band.component';
import { MatTableComponent } from './skills/web-dev/mat-table/mat-table.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BandService } from './shared/band.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WelcomeComponent,
    EducationTeaserComponent,
    ExperienceTeaserComponent,
    SkillsTeaserComponent,
    VolTeaserComponent,
    TickerComponent,
    SkillWelcomeComponent,
    FooterComponent,
    SkillsComponent,
    ExperienceComponent,
    VolunteerComponent,
    EducationComponent,
    WebDevComponent,
    MachineLearningComponent,
    BrandDesignComponent,
    WebScrapingComponent,
    UiComponent,
    AutomationComponent,
    AllComponent,
    PlacePinsComponent,
    SubscribeComponent,
    AllWebDevComponent,
    DirectivesComponent,
    OperatorsComponent,
    HttpComponent,
    InputComponent,
    RouteparamsComponent,
    GeofenceComponent,
    ChildComponent,
    BandComponent,
    MatTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [pinService, dogService, BandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
