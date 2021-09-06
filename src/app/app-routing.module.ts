import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ContactComponent} from './components/contact/contact.component';
import {CartComponent} from './components/cart/cart.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'cart', component: CartComponent},
  {path: 'order', 
  loadChildren:() => import('./order.module/order.module').then((m) => m.OrderModule)},
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
