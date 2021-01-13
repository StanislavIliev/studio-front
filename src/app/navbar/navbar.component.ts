import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  subscription: Subscription;
  authService: AuthService;
  constructor(
    authService: AuthService
  ) {
  this.authService = authService;
}

  ngOnInit(): void {
  }

  logout(event: Event): void {
    event.preventDefault();
    this.authService.logOut();
  }

}
