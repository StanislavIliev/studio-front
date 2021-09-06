import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from "@ngrx/effects";
import { NotifierModule } from 'angular-notifier';
import { OrdersAllComponent } from './orders-all/orders-all.component';
import { OrderComponent } from './order/order.component';
import { OrderUpdateComponent } from './order-update/order-update.component';
import { OrderEffects } from './state/order.effects';
import { StoreModule } from '@ngrx/store';
import { ORDER_STATE_NAME } from './state/order.selector';
import { OrderReducer } from './state/order.reducer';

const routes: Routes = [
  {path: 'orders-all', component: OrdersAllComponent},
  {path: 'order', component: OrderComponent},
  {path: 'order-update', component: OrderUpdateComponent}
]

@NgModule({
  declarations: [
      OrderComponent,
      OrderUpdateComponent,
      OrdersAllComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NotifierModule,
    StoreModule.forFeature(ORDER_STATE_NAME,OrderReducer),
    EffectsModule.forFeature([OrderEffects]),
    
  ],
  exports: [
    OrderComponent,
    OrderUpdateComponent,
    OrdersAllComponent
  ]
})
export class OrderModule { }
