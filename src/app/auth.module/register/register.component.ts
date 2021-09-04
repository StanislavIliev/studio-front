import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { registerStart } from '../state/auth.actions';
import { AppState } from 'src/app/store/app.state';
import { AuthResponse } from 'src/app/models/auth.responsibledate';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  
  registerForm: FormGroup;
  
  constructor(
                private authService: AuthService,
                private store: Store<AppState>
                ) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('' , [Validators.required, Validators.pattern('[A-Za-z0-9]+')]),
      email: new FormControl('' , [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(3)]),
      firstName: new FormControl('' , [Validators.required, Validators.pattern('[A-Za-z]+')]),
      lastName: new FormControl('' , [Validators.required, Validators.pattern('[A-Za-z]+')]),
      phoneNumber: new FormControl('' , [Validators.required, Validators.pattern('[+,0-9]+')])
    });
   }
  
  onRegister(): void {
    if (!this.registerForm.valid) { return; }
    const user : AuthResponse = {...this.registerForm.value};
    this.store.dispatch(registerStart({ auth: user }));
  }

}
