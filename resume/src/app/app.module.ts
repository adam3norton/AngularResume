import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
