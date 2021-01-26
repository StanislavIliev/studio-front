import { Component, OnInit } from '@angular/core';
import {Promotion} from '../../models/promotion';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PromotionService} from '../../services/promotionService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {

  promotionForm: FormGroup;
  promotion: Promotion = new Promotion();

  constructor(
    private router: Router,
    private promotionService: PromotionService
  ) { }

  ngOnInit(): void {
    this.promotionForm = new FormGroup({
      name: new FormControl('' , [Validators.required, Validators.pattern('[A-Za-z0-9]+')]),
      description: new FormControl('' , [Validators.required, Validators.pattern('[A-Za-z0-9]+')]),
      price: new FormControl('' , [Validators.required, Validators.pattern('[0-9]+')])
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
    this.router.navigate(['/promotions-all']);
  }

}