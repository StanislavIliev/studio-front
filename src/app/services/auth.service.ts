import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import {User} from '../models/user';
import {Observable , BehaviorSubject} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import {JwtResponse} from '../helpers/JwtResponse';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<JwtResponse>;
  public currentUser: Observable<JwtResponse>;
  private token: string;
  private loggedUser: string;
  private http: HttpClient;
  private jwtHelper: JwtHelperService;


  constructor(http: HttpClient, private router: Router ,  private cookieService: CookieService
    // private http: HttpClient
  ) {
    this.http = http;
    this.jwtHelper = new JwtHelperService();
    const memo = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<JwtResponse>(JSON.parse(memo));
    this.currentUser = this.currentUserSubject.asObservable();
    cookieService.set('currentUser', memo);
  }


  public setAuthorityVariables(token): any{
    if (token !== null) {
      const objToken = this.jwtHelper.decodeToken(token);

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < objToken.authorities.length; i++) {
        const authority = objToken.authorities[i];
        if (authority === 'ADMIN') {
          localStorage.setItem('admin', 'ADMIN');
        } else if (authority === 'USER') {
          localStorage.setItem('user', 'USER');
        }
      }
      // this.sendMessage();
      // console.log(objToken.authorities);
    }
  }

  public register(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:8080/users/register`, user);
  }

  public get currentUserValue(): any {
   return this.currentUserSubject.value;
  }

  public logIn(user: User): Observable<HttpResponse<User>> {
    this.token = null;
    this.loggedUser = null;
    localStorage.clear();
    return this.http.post<User>(`http://localhost:8080/users/login`, user , {observe: 'response' });
  }

  public isAdmin(role: string): boolean {
    return !!localStorage.getItem('admin');
  }
  public isUser(role: string): boolean {
    return !!localStorage.getItem('user');
  }

  public logOut(): void {
    this.token = null;
    this.loggedUser = null;
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  public saveToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  public addUserToLocalCache(user: User): void {
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserFromLocalCache(): User {
    return JSON.parse(localStorage.getItem('user'));
  }


  public loadToken(): void {
    this.token = localStorage.getItem('token');
  }

  public getToken(): string {
    return this.token;
  }

  public updateUser(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:8080/users/update`, user);
  }


  public isUserLoggedIn(): boolean {
    this.loadToken();
    if (this.token != null && this.token.trim() !== '') {
      if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
        if (!this.jwtHelper.isTokenExpired(this.token)) {
          this.loggedUser = this.jwtHelper.decodeToken(this.token).sub;
          return true;
        }
      }
    } else {
      this.logOut();
      return false;
    }
  }

  requestReset(email: string): Observable<any> {
    return this.http.post(`http://localhost:8080/users/req-reset-password`, email);
  }

  setNewPassword(body): Observable<any> {
    return this.http.post(`http://localhost:8080/users/reset-password`, body);
  }

  handleError(error: HttpErrorResponse): void {
    console.log(error);
  }

  public validPasswordToken(): string {
    return this.token;
  }
}

