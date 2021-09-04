import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpEvent, HttpHeaders } from '@angular/common/http';
import {User} from '../models/user';
import {Observable , BehaviorSubject} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import {JwtResponse} from '../helpers/JwtResponse';
import {CookieService} from 'ngx-cookie-service';
import { AuthPasswordEmail, AuthResponseData } from '../models/auth.responsibledate';
import { Store } from '@ngrx/store';
import { autoLogout } from '../auth.module/state/auth.actions';
import { AppState } from '../store/app.state';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  timeoutInterval: any;

  constructor(
    private http: HttpClient, 
    private store: Store<AppState>){
  }

  login(username: string , password: string): Observable<AuthResponseData>{
    return this.http.post<AuthResponseData>
    (`http://localhost:8080/users/login`,{username,password, returnSecureToken: true});
  }

  register(username: string , password: string): Observable<AuthResponseData>{
    return this.http.post<AuthResponseData>
    (`http://localhost:8080/users/register`
    ,{username ,password, returnSecureToken: true});
  }

  public getUserIdFromLocalCache(): string {
    return JSON.parse(localStorage.getItem('user')).id;
  }

  public isAdmin(role: string): boolean {
    return !!localStorage.getItem('admin');
  }
  public isUser(role: string): boolean {
    return !!localStorage.getItem('user');
  }

  formatUser(data: AuthResponseData){
    const expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000);
    const user = new User();
    user.UserToken=data.idToken;
    user.username = data.username;
    user.id= data.localId;
    user.expirationDate =expirationDate;
    return user;
  }

  sendMailPassword(response: AuthPasswordEmail) {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.post<AuthPasswordEmail>(`http://localhost:8080/users/req-reset-password`, response, { headers });
  }

  changeNewPasswordAfterReset(response: AuthPasswordEmail) {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.post<AuthPasswordEmail>(`http://localhost:8080/users/reset-password`, response, { headers });
  }

  setUserInLocalStorage(user: User){
    localStorage.setItem('userData',JSON.stringify(user));
this.runTimeoutInterval(user);
}

runTimeoutInterval(user: User){
  const todaysDate= new Date().getTime();
  const expirationDate= user.expirationDate.getTime();
  const timeInterval = expirationDate -todaysDate;
   this.timeoutInterval= setTimeout(() => {
    this.store.dispatch(autoLogout());
},timeInterval);

}

  public updateUser(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:8080/users/update`, user);
  }

  handleError(error: HttpErrorResponse): void {
    console.log(error);
  }
  

  getUserFromLocalStorage(){
    const userDataString = localStorage.getItem('userData');
    if(userDataString){
      const userData = JSON.parse(userDataString);
      const expirationDate = new Date(userData.expirationDate);
      const user = new User();
       user.UserToken=userData.idToken;
    user.username = userData.username;
    user.id= userData.localId;
    user.expirationDate =expirationDate;
      this.runTimeoutInterval(user);
      return user;
    }
    return null;
  }

  logout(){
    localStorage.removeItem('userData');
    if(this.timeoutInterval){
      clearTimeout(this.timeoutInterval);
      this.timeoutInterval =null;
    }

  }


  getErrorMessage(message: string){
    switch(message){
      case 'EMAIL_NOT_FOUND':
        return 'Email not found';
      case 'INVALID_PASSWORD':
        return 'Invalid password';
        case 'EMAIL_EXISTS':
        return 'Email already exists.';
        default:
          return 'Unknown error occurred, please try again.'
    }
    }
}

