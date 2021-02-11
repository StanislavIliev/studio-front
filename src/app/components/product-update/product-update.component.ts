import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../models/product';
import {User} from '../../models/user';
import {ProductService} from '../../services/productService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  updateProductForm: FormGroup;
  product: Product = new Product();
  user: User = JSON.parse(localStorage.getItem('user'));

  constructor(
    private productService: ProductService ,
    private router: Router
  ) {
  }


  ngOnInit(): void {
    this.updateProductForm = new FormGroup({
      id: new FormControl(this.product.id),
      description: new FormControl(''),
      price: new FormControl(null),
      name: new FormControl('')
    });
  }

  getProductById(id: string): void{
    this.productService.getProductById(id)
      .subscribe((response) => {
        this.product = response;
        console.log(this.product);
      });
  }

  parseProductInfo(): any{
    this.updateProductForm = new FormGroup({
      id: new FormControl(this.product.id),
      description: new FormControl(this.product.description),
      price: new FormControl(this.product.price),
      name: new FormControl(this.product.name)
    });

  }

  updateProduct(): any {
    const updatedProduct = {...this.updateProductForm.value};
    console.log(updatedProduct);
    this.productService.updateProduct(updatedProduct)
      .subscribe((response) => {
        this.product = response;
        this.parseProductInfo();
        console.log(this.product);
      });
    this.router.navigate(['/product-all']);

  }
}
