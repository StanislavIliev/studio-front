import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ContactComponent} from './components/contact/contact.component';
import {OrderComponent} from './components/order/order.component';
import {OrderUpdateComponent} from './components/order-update/order-update.component';
import {UserUpdateComponent} from './components/user-update/user-update.component';
import {OrderDetailsComponent} from './components/order-details/order-details.component';
import {OrdersAllComponent} from './components/orders-all/orders-all.component';
import {CartComponent} from './components/cart/cart.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'order', component: OrderComponent},
  {path: 'order-update', component: OrderUpdateComponent},
  {path: 'user-update', component: UserUpdateComponent},
  {path: 'order-details', component: OrderDetailsComponent},
  {path: 'orders-all', component: OrdersAllComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product' ,
  loadChildren:() => import('./product.module/product.module').then((m) => m.ProductModule)},
  {path: 'auth',
   loadChildren: () => import('./auth.module/auth.module').then((m) => m.AuthModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
