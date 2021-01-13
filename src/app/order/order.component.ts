import { Component, OnInit } from '@angular/core';
import {Order} from '../models/order';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  user: User = new User();
  addOrderForm: FormGroup;
  order: Order = new Order();

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.addOrderForm = new FormGroup({
      name: new FormControl(null),
      description: new FormControl(null),
      price: new FormControl(null),
      manicureType: new FormControl(null),
      user: new FormControl(null)
    });
  }

  addOrder(): any {
    const newOrder = {...this.addOrderForm.value};
    console.log(newOrder);
    this.authService.addOrderForm(newOrder)
      .subscribe((response) => {
        this.order = response;
        console.log(this.order);
      });
  }
}
