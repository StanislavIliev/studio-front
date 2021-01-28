import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { CommentComponent } from './components/comment/comment.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { OrderComponent } from './components/order/order.component';
import { AlertComponent } from './alert/alert.component';
import {HttpClientModule} from '@angular/common/http';
import { CommentUpdateComponent } from './components/comment-update/comment-update.component';
import { OrderUpdateComponent } from './components/order-update/order-update.component';
import { PromotionUpdateComponent } from './components/promotion-update/promotion-update.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { PromotionDetailsComponent } from './components/promotion-details/promotion-details.component';
import { OrdersAllComponent } from './components/orders-all/orders-all.component';
import { PromotionsAllComponent } from './components/promotions-all/promotions-all.component';
import { CommentsAllComponent } from './components/comments-all/comments-all.component';
import { RequestResetComponent } from './components/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/response-reset/response-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    CommentComponent,
    PromotionComponent,
    OrderComponent,
    AlertComponent,
    CommentUpdateComponent,
    OrderUpdateComponent,
    PromotionUpdateComponent,
    UserUpdateComponent,
    CommentDetailsComponent,
    OrderDetailsComponent,
    PromotionDetailsComponent,
    OrdersAllComponent,
    PromotionsAllComponent,
    CommentsAllComponent,
    RequestResetComponent,
    ResponseResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
