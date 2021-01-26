import { Component, OnInit , OnDestroy  } from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm, FormControl} from '@angular/forms';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  public logged: boolean;
  private subscriptions: Subscription[] = [];

  private loginUser: User = {
    username: '',
    password: ''
  };


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private authenticationService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('' , [Validators.required, Validators.pattern('[A-Za-z0-9]+')]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  logIn(event: Event): void {

      this.loginUser.username = this.loginForm.value.username;
      this.loginUser.password = this.loginForm.value.password;
      console.log(this.loginUser);
      this.logged = true;
      this.subscriptions.push(
        this.authenticationService.logIn(this.loginUser).subscribe(
          (response: HttpResponse<User>) => {
            const token = response.headers.get('Jwt-Token');
            this.authenticationService.saveToken(token);
            this.authService.setAuthorityVariables(token);
            this.authenticationService.addUserToLocalCache(response.body);

            this.router.navigate(['/']);

            this.logged = false;
          },
          (errorResponse: HttpErrorResponse) => {
            this.logged = false;
          }
        )
      );
    }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  reloadPage(): void {
    window.location.reload();
  }
}
