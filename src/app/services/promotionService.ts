import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Promotion } from '../models/promotion';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient) { }

  getAllPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>('http://localhost:8080/promotions/all');
  }

  public addPromotion(promotion: Promotion): Observable<Promotion> {
    return this.http.post<Promotion>(`http://localhost:8080/promotions/add`, promotion);
  }

  getPromotionById(id: string): Observable<Promotion>{
    return this.http.get(`http://localhost:8080/promotions/${id}`);
  }

  deletePromotionById(promotion: Promotion): Observable<Promotion> {
    return this.http.post(`http://localhost:8080/promotions/delete/`, promotion);
  }

  public updatePromotion(promotion: Promotion): Observable<Promotion> {
    return this.http.post<Promotion>(`http://localhost:8080/promotions/update`, promotion);
  }
}
