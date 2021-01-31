import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ContactComponent} from './components/contact/contact.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {CommentComponent} from './components/comment/comment.component';
import {PromotionComponent} from './components/promotion/promotion.component';
import {OrderComponent} from './components/order/order.component';
import {OrderUpdateComponent} from './components/order-update/order-update.component';
import {PromotionUpdateComponent} from './components/promotion-update/promotion-update.component';
import {CommentUpdateComponent} from './components/comment-update/comment-update.component';
import {UserUpdateComponent} from './components/user-update/user-update.component';
import {OrderDetailsComponent} from './components/order-details/order-details.component';
import {CommentDetailsComponent} from './components/comment-details/comment-details.component';
import {OrdersAllComponent} from './components/orders-all/orders-all.component';
import {PromotionsAllComponent} from './components/promotions-all/promotions-all.component';
import {CommentsAllComponent} from './components/comments-all/comments-all.component';
import {ResponseResetComponent} from './components/response-reset/response-reset.component';
import {RequestResetComponent} from './components/request-reset/request-reset.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'comment', component: CommentComponent},
  {path: 'promotion', component: PromotionComponent},
  {path: 'order', component: OrderComponent},
  {path: 'comment-update', component: CommentUpdateComponent},
  {path: 'order-update', component: OrderUpdateComponent},
  {path: 'promotion-update', component: PromotionUpdateComponent},
  {path: 'user-update', component: UserUpdateComponent},
  {path: 'order-details', component: OrderDetailsComponent},
  {path: 'comment-details', component: CommentDetailsComponent},
  {path: 'orders-all', component: OrdersAllComponent},
  {path: 'comments-all', component: CommentsAllComponent},
  {path: 'promotions-all', component: PromotionsAllComponent},
  {path: 'response-reset/:?', component: ResponseResetComponent},
  {path: 'request-reset', component: RequestResetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
