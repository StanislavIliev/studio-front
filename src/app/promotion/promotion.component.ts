import { Component, OnInit } from '@angular/core';
import {Promotion} from '../models/promotion';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {

  promotionForm: FormGroup;
  promotion: Promotion = new Promotion();

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.promotionForm = new FormGroup({
      name: new FormControl(null),
      description: new FormControl(null),
      price: new FormControl(null)
    });
  }

  addPromoIn(): any {
    const newPromotion = {...this.promotionForm.value};
    console.log(newPromotion);

    this.authService.addPromoin(newPromotion)
      .subscribe((response) => {
        this.promotion = response;
        console.log(this.promotion);
      });
  }

}
