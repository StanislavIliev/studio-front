import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService, UserService, AuthenticationService } from '../services';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService,
              private userService: UserService,
              private alertService: AlertService) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }

  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  }
  // // tslint:disable-next-line:typedef
  // get f() { return this.registerForm.controls; }
  //
  // // tslint:disable-next-line:typedef
  // onSubmit() {
  //   this.submitted = true;
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
  //       },
  //       error => {
  //         this.alertService.error(error);
  //         this.loading = false;
  //       });
  // }
}
