import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
// import { AlertService, UserService, AuthenticationService } from '../services';
import { first } from 'rxjs/operators';
import {User} from '../../models/user';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    user: User = new User();
  loading = false;
  submitted = false;

  constructor(
               // private formBuilder: FormBuilder,
                private router: Router,
               // private authenticationService: AuthenticationService,
                private authService: AuthService,
               // private alertService: AlertService
  ) {
     // if (this.authenticationService.currentUserValue) {
     //   this.router.navigate(['/']);
     // }

  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('' , [Validators.required, Validators.pattern('[A-Za-z0-9]+')]),
      email: new FormControl('' , [Validators.required, Validators.pattern('[A-Za-z0-9]+')]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(3)]),
      firstName: new FormControl('' , [Validators.required, Validators.pattern('[A-Za-z]+')]),
      lastName: new FormControl('' , [Validators.required, Validators.pattern('[A-Za-z]+')]),
      phoneNumber: new FormControl('' , [Validators.required, Validators.pattern('[+,0-9]+')])
    });
   }
  onSubmit(): any {
    this.submitted = true;
  }
  //
  //   // reset alerts on submit
  //   this.alertService.clear();
  //
  //   // stop here if form is invalid
  //   if (this.registerForm.invalid) {
  //     return;
  //   }
  //
  //   this.loading = true;
  //   this.userService.register(this.registerForm.value)
  //     .pipe(first())
  //     .subscribe(
  //       data => {
  //         this.alertService.success('Registration successful', true);
  //         this.router.navigate(['/login']);
  //      },
  //       error => {
  //         this.alertService.error(error);
  //         this.loading = false;
  //       });
  // }
  onRegister(): any {
      const newUser = {...this.registerForm.value};
      this.authService.register(newUser)
        .subscribe((response) => {
          this.user = response;
          console.log(this.user);
        });
      this.router.navigate(['/login']);
  }
}
