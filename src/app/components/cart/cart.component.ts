import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cartService';
import {HttpClient} from '@angular/common/http';
import { Cart } from '../../models/cart';
import {Product} from '../../models/product';
import {User} from '../../models/user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

   user: User = JSON.parse(localStorage.getItem('user'));
   cart: Cart = new Cart();

   constructor(private cartService: CartService,
               private authService: AuthService,
               private http: HttpClient,
               private router: Router) {
     this.getCartByUserId();
  }

  ngOnInit(): void {
    }

  getCartByUserId(): void{
     const userId = this.user.id;
     this.cartService.getCart(userId)
      .subscribe((response) => {
        this.cart = response;
        console.log(this.cart);
      });
  }

  deleteProductFromCart(product: Product ): void {
    const productAndUserId = {
      userId: this.authService.getUserIdFromLocalCache(),
      product: product.id
    };
    this.cartService.deleteProductFromCart(productAndUserId)
      .subscribe((resp) => {
        console.log(resp);
      });
    this.router.navigate(['/cart']);
  }

  emptyCart(): void {
    const productAndUserId = {
      userId: this.authService.getUserIdFromLocalCache(),
      product: null
    };
    this.cartService.deleteProductFromCart(productAndUserId)
      .subscribe((resp) => {
        console.log(resp);
      });
  }

  }
