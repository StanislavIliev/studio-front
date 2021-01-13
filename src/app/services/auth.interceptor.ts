import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthService) { }

  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {

    if (httpRequest.url.includes(`http://localhost:8080/users/login`)) {
      return httpHandler.handle(httpRequest);
    }

    // if (httpRequest.url.includes(`http://localhost:8000/api/user/login`)) {
    //   return httpHandler.handle(httpRequest);
    // }

    this.authenticationService.loadToken();
    const token = this.authenticationService.getToken();
    if (token) {
      const request = httpRequest.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
      return httpHandler.handle(request);
    } else {
      return httpHandler.handle(httpRequest);
    }
  }
}
