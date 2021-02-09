import { Component, OnInit } from '@angular/core';
import {Promotion} from '../../models/promotion';
import {Router} from '@angular/router';
import {PromotionService} from '../../services/promotionService';
import {Product} from '../../models/product';
import {ProductService} from '../../services/productService';

@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.scss']
})
export class ProductAllComponent implements OnInit {

  products: Product[] =  [];

  constructor(
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((response) => {
      this.products = response;
    });
    this.router.navigate(['/product-all']);
  }
}
