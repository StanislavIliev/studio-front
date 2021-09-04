import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ContactComponent} from './components/contact/contact.component';
import {OrderComponent} from './components/order/order.component';
import {OrderUpdateComponent} from './components/order-update/order-update.component';
import {UserUpdateComponent} from './components/user-update/user-update.component';
import {ProductUpdateComponent} from './product.module/product-update/product-update.component';
import {ProcedureUpdateComponent} from './product.module/procedure-update/procedure-update.component';
import {OrderDetailsComponent} from './components/order-details/order-details.component';
import {OrdersAllComponent} from './components/orders-all/orders-all.component';
import {CartComponent} from './components/cart/cart.component';
import {ProductComponent} from './product.module/product/product.component';
import {ProcedureComponent} from './product.module/procedure/procedure.component';
import {ProcedureAllComponent} from './product.module/procedure-all/procedure-all.component';
import {ProductAllComponent} from './product.module/product-all/product-all.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'order', component: OrderComponent},
  {path: 'order-update', component: OrderUpdateComponent},
  {path: 'user-update', component: UserUpdateComponent},
  {path: 'procedure-update/:id', component: ProcedureUpdateComponent},
  {path: 'product-update/:id', component: ProductUpdateComponent},
  {path: 'order-details', component: OrderDetailsComponent},
  {path: 'orders-all', component: OrdersAllComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product', component: ProductComponent},
  {path: 'procedure', component: ProcedureComponent},
  {path: 'procedure-all', component: ProcedureAllComponent },
  {path: 'product-all', component: ProductAllComponent},
  {path: 'auth',
   loadChildren: () => import('./auth.module/auth.module').then((m) => m.AuthModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
