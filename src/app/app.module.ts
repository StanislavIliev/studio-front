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
    UserUpdateComponent
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
