import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
// import { AlertService, UserService, AuthenticationService } from '../services';
import { first } from 'rxjs/operators';
import {User} from '../models/user';
import {AuthService} from '../services/auth.service';


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
      username: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
      confirmPassword: new FormControl(null),
      phoneNumber: new FormControl(null)
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
