import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenApiModel } from '../models/token-api';
import { UserLoginDto } from '../models/user/user-login-dto';
import { UserSignUpDTO } from '../models/user/user-signup-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private link: string = 'http://localhost:3000/';
  private userPayload: any;
  constructor(private http: HttpClient, private router: Router) {
    this.userPayload = this.decodedToken();
  }
  signUp(userObj: UserSignUpDTO) {
    return this.http.post<any>(`${this.link}users/register`, userObj);
  }
  signIn(loginObj: UserLoginDto) {
    console.log(loginObj);
    return this.http.post<any>(`${this.link}users/login`, loginObj);
  }
  signOut() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
  decodedToken() {
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    console.log(jwtHelper.decodeToken(token));
    return jwtHelper.decodeToken(token);
  }
  getfullNameFromToken() {
    if (this.userPayload) return this.userPayload.name;
  }

  getRoleFromToken() {
    if (this.userPayload) return this.userPayload.role;
  }
  storeRefreshToken(tokenValue: string) {
    localStorage.setItem('refreshToken', tokenValue);
  }
  getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }
  renewToken(tokenApi: TokenApiModel) {
    return this.http.post<any>(`${this.link}refresh`, tokenApi);
  }
}
