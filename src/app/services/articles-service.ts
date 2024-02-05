import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../models/workouts/session';
import { Article } from '../models/articles/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl: string = 'http://localhost:3000/';
 
  constructor(private http: HttpClient) { 
    
  }
  getArticles():Observable<Article[]> {
    return this.http.get<any>(`${this.apiUrl}articles/all`);
  }
  getBookmarks():Observable<Article[]> {
    return this.http.get<any>(`${this.apiUrl}articles/bookmarks`);
  }
  getArticleById(id: number) :Observable<Article>{
    return this.http.get<any>(`${this.apiUrl}articles/${id}`);
  }
  addToBookMarks(id:number){
    return this.http.post<any>(`${this.apiUrl}articles/bookmarK/${id}`,{});
  }
  removeFromBookMarks(id:number):Observable<Article[]>{
    return this.http.post<any>(`${this.apiUrl}articles/bookmarK/${id}`,{});
  }
}