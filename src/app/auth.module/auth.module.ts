import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { NotifierModule } from "angular-notifier";
import { AppRoutingModule } from "../app-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { RequestResetComponent } from "./request-reset/request-reset.component";
import { ResponseResetComponent } from "./response-reset/response-reset.component";
import { UserUpdateComponent } from "./user-update/user-update.component";

const routes: Routes = [{
  path: '', children: [
    {path: '', redirectTo: 'login'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'request-reset',component: RequestResetComponent},
    {path: 'response-reset', component: ResponseResetComponent},
    {path: 'user-update', component: UserUpdateComponent}
  ]
}];
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserUpdateComponent,
    RequestResetComponent,
    ResponseResetComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule,
    RouterModule.forChild(routes)
  ], 
  exports:
  [
    LoginComponent,
    RegisterComponent,
    ResponseResetComponent,
    RequestResetComponent,
    UserUpdateComponent,
    UserUpdateComponent
  ]
})
export class AuthModule{

}
