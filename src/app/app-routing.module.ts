import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SciencehubComponent } from './components/sciencehub/sciencehub.component';
import { CaloriestrackerComponent } from './components/caloriestracker/caloriestracker.component';
import { FridgeComponent } from './components/fridge/fridge.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { WorkoutplansComponent } from './components/workoutplans/workoutplans.component';
import { WorkoutDetailsComponent } from './components/workout-details/workout-details.component';
import { LogSessionComponent } from './components/log-session/log-session.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

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
  { path:'dashboard', component: DashboardComponent},

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
