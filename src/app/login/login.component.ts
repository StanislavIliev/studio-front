import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {User} from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   loginForm: FormGroup;
  user: User = new User();

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    });
  }
  logIn(): any {
    const newUser = {...this.loginForm.value};
    this.authService.login(newUser)
      .subscribe((response) => {
        this.user = response;
        console.log(this.user);
      });
  }

}
