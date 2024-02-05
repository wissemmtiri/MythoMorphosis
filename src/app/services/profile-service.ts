import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../models/workouts/session';
import { Article } from '../models/articles/articles';
import { Profile } from '../models/user/profile-dto';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl: string = 'http://localhost:3000/';
 
  constructor(private http: HttpClient) { 
    
  }
  getProfile():Observable<Profile> {
    return this.http.get<any>(`${this.apiUrl}users/profile`);
  }
  updateProfile(profile: Profile): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}users/update-profile`, profile);
  }
}