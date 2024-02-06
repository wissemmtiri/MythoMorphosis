import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/articles/articles';
import { environment } from 'src/environments/environment.development';
import { WorkoutPlan } from '../models/workouts/workout-plan';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  private apiUrl = environment.apiUrl;
 
  constructor(private http: HttpClient) { 
    
  }
  getPlansByLevel(level: string): Observable<WorkoutPlan[]> {
    return this.http.get<WorkoutPlan[]>(`${this.apiUrl}workout-plans/level/${level}`);
  }
  
}