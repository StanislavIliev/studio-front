import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../models/user';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {NotifierService} from 'angular-notifier';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { registerStart } from '../state/auth.actions';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
   private user: User;
   private notifier: NotifierService;
  

  constructor(
                private authService: AuthService,
                private store: Store<AppState>,
                notifier : NotifierService
                ) {
                  this.notifier= notifier;
                  this.user = new User();
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
    this.user = {...this.registerForm.value};
    this.store.dispatch(registerStart({ user: this.user }));
  }

}
