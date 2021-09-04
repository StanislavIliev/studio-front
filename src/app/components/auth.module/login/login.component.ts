import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { loginStart } from '../state/auth.actions';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

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
    const user:User = {...this.loginForm.value};
    this.store.dispatch(loginStart({user}));
  }
}