import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../models/workouts/session';
import { Article } from '../models/articles/articles';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private apiUrl: string = 'http://localhost:3000/';
 
  constructor(private http: HttpClient) { 
    
  }
  getFood():Observable<Food[]> {
    return this.http.get<any>(`${this.apiUrl}food/list`);
  }

}