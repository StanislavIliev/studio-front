import { Component, OnInit } from '@angular/core';
import { Promotion } from '../../models/promotion';
import { PromotionService } from '../../services/promotionService';
import {Router} from '@angular/router';


@Component({
  selector: 'app-promotions-all',
  templateUrl: './promotions-all.component.html',
  styleUrls: ['./promotions-all.component.scss']
})
export class PromotionsAllComponent implements OnInit {
  promotions: Promotion[] =  [];

  constructor(
    private router: Router,
    private promotionService: PromotionService) { }

  ngOnInit(): void {
    this.promotionService.getAllPromotions().subscribe((response) => {
      this.promotions = response;
    });
    this.router.navigate(['/promotions-all']);
  }
}
