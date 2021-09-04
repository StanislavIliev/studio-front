import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactComponent } from './components/contact/contact.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { OrderComponent } from './components/order/order.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { OrderUpdateComponent } from './components/order-update/order-update.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrdersAllComponent } from './components/orders-all/orders-all.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthTokenInterceptor } from './services/auth.token.interceptor';
import { AuthModule } from './auth.module/auth.module';
import { ProductModule } from './product.module/product.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    HomePageComponent,
    ContactComponent,
    OrderComponent,
    OrderUpdateComponent,
    UserUpdateComponent,
    OrderDetailsComponent,
    OrdersAllComponent,
    CartComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
         HttpClientModule,
         AuthModule,
         ProductModule
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
