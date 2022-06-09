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
    SkillWelcomeComponent
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
