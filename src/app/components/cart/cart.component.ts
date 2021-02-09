import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cartService';
import {HttpClient} from '@angular/common/http';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
   carts: Cart[] = [];
  constructor(private cartService: CartService,
              private userService: AuthService,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    }


}
