import { Component, OnInit } from '@angular/core';
import {Order} from '../../models/order';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { OrderService } from '../../services/orderService';
import { User } from '../../models/user';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { orderStart  } from '../state/order.actions';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  addOrderForm: FormGroup;
  order: Order = new Order();
  user: User = JSON.parse(localStorage.getItem('user'));

  constructor(
    private orderService: OrderService ,
    private router: Router,
    private store: Store<AppState>
      ) {
  }

  ngOnInit(): void {
    this.addOrderForm = new FormGroup({
      description: new FormControl('' , [Validators.required, Validators.pattern('[A-Za-z0-9 ]+')]),
      procedure: new FormControl(null),
      product: new FormControl(null),
      user: new FormControl(this.user)
    });
  }

  addOrder(): any {
    const newOrder = {...this.addOrderForm.value};
    this.store.dispatch(orderStart({newOrder}))
    this.router.navigate(['/orders-all']);

  }

  getOrderById(orderId: string): void{
    this.orderService.getOrderById(orderId)
      .subscribe((response) => {
        this.order = response;
      });
  }
}
