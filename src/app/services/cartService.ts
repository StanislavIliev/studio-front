import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ProductAndUserId} from '../models/productAndUserId';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {
  }

  deleteProductFromCart(pui: ProductAndUserId): Observable<any> {
    return this.http.post('http://localhost:8000/carts/delete-product', pui);
  }
}
