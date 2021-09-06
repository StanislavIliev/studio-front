import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { exhaustMap, take } from 'rxjs/operators';
import { getToken } from '../auth/state/auth.selector';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
constructor( private store : Store<AppState>){}

  intercept( req:  HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return this.store.select(getToken).pipe(take(1),exhaustMap((token) => {
      if(!token){
        return next.handle(req);
      }
      let motifiedReq = req.clone({
        params: req.params.append('auth',token),
      });
      return next.handle(motifiedReq);
    }));

  }
}
