import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { WorkoutPlan } from '../models/workouts/workout-plan';

@Injectable({
  providedIn: 'root'
})
export class PlanDetailService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {    
  }
  getPlanDetailById(id: number): Observable<WorkoutPlan> {
    return this.http.get<WorkoutPlan>(`${this.apiUrl}workout-plans/${id}`);
  }
  
}