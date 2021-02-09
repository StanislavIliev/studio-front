import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }



  public addProductForm(product: Product): Observable<Product> {
    return this.http.post<Product>(`http://localhost:8080/products/add`, product);
  }

  getProductById(id: string): Observable<Product>{
    return this.http.get(`http://localhost:8080/products/${id}`);
  }


  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/products/all');
  }
}
