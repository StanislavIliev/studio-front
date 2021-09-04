import { Injectable } from "@angular/core";
import { Actions, createEffect , ofType } from "@ngrx/effects";
import { autoLogin, autoLogout, loginStart, loginSuccess, registerStart, registerSuccess, resetPaswordFail, resetPaswordStart, resetPaswordSuccess } from "./auth.actions";
import { AuthService } from '../../services/auth.service';
import { catchError, exhaustMap , map ,mergeMap,tap} from 'rxjs/operators';
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { setErrorMessage, setLoadingSpinner } from "src/app/store/Shared/shared.actions";
import { EMPTY, of } from "rxjs";
import { Router } from "@angular/router";
import { NotifierService } from "angular-notifier";
import { AuthPasswordEmail } from "src/app/models/auth.responsibledate";

@Injectable()
export class AuthEffects{

  constructor(private actions$ : Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router,
    private notifier: NotifierService
    ){}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
      return this.authService.login(action.username, action.password).pipe(
        map((data) => {
          this.store.dispatch(setLoadingSpinner({ status:false }));
          this.store.dispatch(setErrorMessage({ message: '' }));
        const user = this.authService.formatUser(data);
        this.authService.setUserInLocalStorage(user);
        return loginSuccess({ user ,redirect: true });
      }),
      catchError(errResp => {
        this.store.dispatch(setLoadingSpinner({ status:false }));
        const errorMessage = this.authService.getErrorMessage(errResp.error.error.message);
        return of(setErrorMessage({ message: errorMessage }));
      })
      );
    })
    );
  });

  loginRedirect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(...[loginSuccess,registerSuccess]),
      tap((action) => {
        this.store.dispatch(setErrorMessage({ message: '' }));
        if(action.redirect){
        this.router.navigate(['/']);
      }
      })
      );
  },
  { dispatch: false });

  register$ = createEffect(() => {
    return this.actions$.pipe(ofType(registerStart),exhaustMap(action => {
        return this.authService.register(action.auth.username,action.auth.password).pipe(map((data) => {
          this.store.dispatch(setLoadingSpinner({ status: false }));
          const user =this.authService.formatUser(data);
          this.authService.setUserInLocalStorage(user);
          this.router.navigate(['/']);
          return registerSuccess({ user: data , redirect: true});
        }),
        catchError(errResp => {
          this.store.dispatch(setLoadingSpinner({ status:false }));
          const errorMessage = this.authService.getErrorMessage(errResp.error.error.message);
          return of(setErrorMessage({ message: errorMessage }));
        })
        );
    })
    );
  });


  
autoLogin$ = createEffect(() => {
  return this.actions$.pipe(ofType(autoLogin),mergeMap((action) => {
    const user = this.authService.getUserFromLocalStorage();
    return of(loginSuccess({ user , redirect: false}));
  })
  );
}
);

autoLgout$ = createEffect(() =>{
    return this.actions$.pipe(ofType(autoLogout),map(action =>{
      this.authService.logout();
      this.router.navigate(['auth']);
    }))
},{dispatch: false});

requestEmailPassworReset$ = createEffect(() => {
  return this.actions$.pipe(
    ofType(resetPaswordStart),
    exhaustMap((action) => {
      const rp: AuthPasswordEmail = {
        pass: action.requestType,
        email: action.email,
      };
      return this.authService.sendMailPasswordReset(rp).pipe(
        map(
          (response) => {
            this.router.navigate(['/']);
            this.notifier.notify('success','You have successfully change your password.');
            return resetPaswordSuccess({message: 'You have successfully change your password.'});
          },
          (err) => {
            return resetPaswordFail({message: 'Password reset failed!'});
          }
        )
      );
    }),
    catchError(() => {
      return EMPTY;
    })
  );
});

}
