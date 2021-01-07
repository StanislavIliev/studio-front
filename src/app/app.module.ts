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
    PromotionComponent,
    CommentComponent,
    CommentListComponent,
    CommentDetailComponent,
    CommentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
