import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Order} from '../../models/order';
import {User} from '../../models/user';
import {OrderService} from '../../services/orderService';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { getOrderById } from '../state/order.selector';
import { updateOrderStart } from '../state/order.actions';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.scss']
})
export class OrderUpdateComponent implements OnInit {

  updateOrderForm: FormGroup;
  order: Order;
  orderSubscription: Subscription;
  user: User = JSON.parse(localStorage.getItem('user'));

  constructor(
    private orderService: OrderService ,
    private router: Router,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.updateOrderForm = new FormGroup({
      description: new FormControl(null),
      procedure: new FormControl(null),
      product: new FormControl(null),
      user: new FormControl(this.user)
    });
    this.orderSubscription = this.store.select(getOrderById).subscribe(order => {
      if(order){
        this.order= order;
        this.updateOrderForm.patchValue({
          price: order.price,
          description: order.description
        });
      }
    });
  }

  updateOrder(): any {
    if (!this.updateOrderForm.valid) {
      return;
    }
    const price = this.updateOrderForm.value.price;
    const description = this.updateOrderForm.value.description;
    const updatedOrder: Order = {
      id: this.order.id,
      price,
      description
    }
    this.store.dispatch(updateOrderStart({updatedOrder}));
  }


}
