import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { AppState } from 'src/app/store/app.state';
import { loginStart } from '../state/auth.actions';
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9]{3,20}$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$"')])
    });
  }

  onLogin(): void {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.store.dispatch(setLoadingSpinner({ status:true }));
    this.store.dispatch(loginStart({username, password}));
  }
}