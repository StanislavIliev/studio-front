import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { PromotionComponent } from './promotion/promotion.component';
import { CommentComponent } from './comment/comment.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { CommentDetailComponent } from './comment/comment-detail/comment-detail.component';
import { CommentItemComponent } from './comment/comment-list/comment-item/comment-item.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { AlertComponent } from './alert/alert.component';
import {HttpClientModule} from '@angular/common/http';

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
    CommentListComponent,
    CommentDetailComponent,
    CommentItemComponent,
    PromotionComponent,
    OrderComponent,
    AlertComponent
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
