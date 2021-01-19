import { Component, OnInit } from '@angular/core';
import {Promotion} from '../../models/promotion';
import {FormControl, FormGroup} from '@angular/forms';
import {PromotionService} from '../../services/promotionService';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {

  promotionForm: FormGroup;
  promotion: Promotion = new Promotion();

  constructor(
    private promotionService: PromotionService
  ) { }

  ngOnInit(): void {
    this.promotionForm = new FormGroup({
      name: new FormControl(null),
      description: new FormControl(null),
      price: new FormControl(null)
    });
  }

  getPromotionById(promotionId: string): void{
    this.promotionService.getPromotionById(promotionId)
      .subscribe((response) => {
        this.promotion = response;
      });
  }

  addPromoIn(): any {
    const newPromotion = {...this.promotionForm.value};
    console.log(newPromotion);

    this.promotionService.addPromotion(newPromotion)
      .subscribe((response) => {
        this.promotion = response;
        console.log(this.promotion);
      });
  }

}
