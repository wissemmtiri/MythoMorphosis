import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../models/food';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private apiUrl = environment.apiUrl;
 
  constructor(private http: HttpClient) { 
    
  }
  getFood():Observable<Food[]> {
    return this.http.get<any>(`${this.apiUrl}food/list`);
  }

}