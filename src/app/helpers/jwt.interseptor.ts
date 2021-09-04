import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { User } from '../models/user';

import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private currentUserSubject: BehaviorSubject<User>;
  constructor(private authenticationService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available

    const currentUser = this.currentUserSubject.value;
    if (currentUser && currentUser.UserToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.UserToken}`
        }
      });
    }

    return next.handle(request);
  }
}
