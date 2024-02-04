import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BookmarksComponent } from "./components/bookmarks/bookmarks.component";
import { CaloriestrackerComponent } from "./components/caloriestracker/caloriestracker.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { FridgeComponent } from "./components/fridge/fridge.component";
import { LogSessionComponent } from "./components/log-session/log-session.component";
import { LoginComponent } from "./components/login/login.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { SciencehubComponent } from "./components/sciencehub/sciencehub.component";
import { SidenavbarComponent } from "./components/sidenavbar/sidenavbar.component";
import { SignupComponent } from "./components/signup/signup.component";
import { WorkoutDetailsComponent } from "./components/workout-details/workout-details.component";
import { WorkoutplansComponent } from "./components/workoutplans/workoutplans.component";
import { CfaComponent } from "./home/cfa/cfa.component";
import { FooterComponent } from "./home/footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { ServicesComponent } from "./home/services/services.component";
import { TeamComponent } from "./home/team/team.component";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ServicesComponent,
    TeamComponent,
    FooterComponent,
    CfaComponent,
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
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
