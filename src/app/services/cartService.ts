import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ProductAndUserId} from '../models/productAndUserId';
import {Observable} from 'rxjs';
import {Cart} from '../models/cart';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {
  }

  deleteProductFromCart(pui: ProductAndUserId): Observable<any> {
    return this.http.post('http://localhost:8080/carts/delete-product', pui);
  }


  getCart(id: string): Observable<Cart> {
    return this.http.get(`http://localhost:8080/carts/${id}`);
  }
}
