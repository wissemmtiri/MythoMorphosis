import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SciencehubComponent } from './sciencehub/sciencehub.component';
import { CaloriestrackerComponent } from './caloriestracker/caloriestracker.component';
import { FridgeComponent } from './fridge/fridge.component';
import { ProfileComponent } from './profile/profile.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { WorkoutplansComponent } from './workoutplans/workoutplans.component';
import { WorkoutDetailsComponent } from './workout-details/workout-details.component';
import { LogSessionComponent } from './log-session/log-session.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'sciencehub',
    component: SciencehubComponent
  },
  {
    path: 'bookmarks',
    component: BookmarksComponent
  },
  {
    path: 'caloriestracker',
    component: CaloriestrackerComponent
  },
  {
    path: 'fridge',
    component: FridgeComponent
  },
  {
    path: 'workout/start',
    component: WorkoutplansComponent
  },
  {
    path: 'workout/details/:id',
    component: WorkoutDetailsComponent
  },
  {
    path: 'workout/log',
    component: LogSessionComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
