import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/user/profile-dto';
import { environment } from 'src/environments/environment.development';
import { WorkoutPlan } from '../models/workouts/workout-plan';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = environment.apiUrl;
 
  constructor(private http: HttpClient) { 
    
  }
  getProfile():Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}users/profile`);
  }
  updateProfile(profile: Profile): Observable<any> {
    return this.http.put<Profile>(`${this.apiUrl}users/update-profile`, profile);
  }

  getWorkoutPlan():Observable<WorkoutPlan> {
    return this.http.get<WorkoutPlan>(`${this.apiUrl}users/workoutplan`);
  }
}