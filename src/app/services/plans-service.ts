import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  choosePlan(workoutId:number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}workout-plans/choose-plan`,{"id":workoutId });
  }}