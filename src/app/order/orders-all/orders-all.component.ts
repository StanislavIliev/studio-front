import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Order } from '../../models/order';
import { allOrdersStart } from '../state/order.actions';
import { getOrders } from '../state/order.selector';

@Component({
  selector: 'app-orders-all',
  templateUrl: './orders-all.component.html',
  styleUrls: ['./orders-all.component.scss']
})
export class OrdersAllComponent implements OnInit {

orders: Observable<Order[]>;

  constructor(
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.orders = this.store.select(getOrders);
    this.store.dispatch(allOrdersStart());
  }

}
