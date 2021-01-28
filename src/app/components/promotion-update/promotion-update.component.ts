import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Promotion} from '../../models/promotion';
import {PromotionService} from '../../services/promotionService';
import {Router} from '@angular/router';


@Component({
  selector: 'app-promotion-update',
  templateUrl: './promotion-update.component.html',
  styleUrls: ['./promotion-update.component.scss']
})
export class PromotionUpdateComponent implements OnInit {
  updatePromotionForm: FormGroup;
  promotion: Promotion = new Promotion();

  constructor(
    private router: Router,
    private promotionService: PromotionService
  ) { }

  ngOnInit(): void {
    this.updatePromotionForm = new FormGroup({
      name: new FormControl(null),
      description: new FormControl(null),
      price: new FormControl(null)
    });
  }

  updatePromoIn(): any {
    const updatedPromotion = {...this.updatePromotionForm.value};
    console.log(updatedPromotion);

    this.promotionService.updatePromotion(updatedPromotion)
      .subscribe((response) => {
        this.promotion = response;
        console.log(this.promotion);
      });
  }

  deletePromotionById(promotion: Promotion): void {

    this.promotionService.deletePromotionById(this.promotion)
      .subscribe((resp) => { console.log(resp); });

    this.router.navigate(['/promotions-all']);
  }



}
