import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './home/services/services.component';
import { TeamComponent } from './home/team/team.component';
import { FooterComponent } from './home/footer/footer.component';
import { CfaComponent } from './home/cfa/cfa.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SciencehubComponent } from './sciencehub/sciencehub.component';
import { CaloriestrackerComponent } from './caloriestracker/caloriestracker.component';
import { FridgeComponent } from './fridge/fridge.component';
import { ProfileComponent } from './profile/profile.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { WorkoutplansComponent } from './workoutplans/workoutplans.component';
import { WorkoutDetailsComponent } from './workout-details/workout-details.component';
import { LogSessionComponent } from './log-session/log-session.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    TeamComponent,
    FooterComponent,
    CfaComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    SidenavbarComponent,
    DashboardComponent,
    SciencehubComponent,
    CaloriestrackerComponent,
    FridgeComponent,
    ProfileComponent,
    BookmarksComponent,
    WorkoutplansComponent,
    WorkoutDetailsComponent,
    LogSessionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
