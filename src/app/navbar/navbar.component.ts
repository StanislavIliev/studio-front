import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  subscription: Subscription;
  authService: AuthService;
  constructor(
    authService: AuthService,
    private router: Router
  ) {
  this.authService = authService;
}

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logOut();
    this.router.navigate(['/']);
  }

}
