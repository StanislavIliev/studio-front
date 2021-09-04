import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ProductAllComponent } from './product-all/product-all.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { ProcedureAllComponent } from './procedure-all/procedure-all.component';
import { ProcedureUpdateComponent } from './procedure-update/procedure-update.component';
import { EffectsModule } from "@ngrx/effects";

const routes: Routes = [
  {path: 'product-add', component: ProductComponent},
  {path: 'product-all', component: ProductAllComponent},
  {path: 'product-update', component: ProductUpdateComponent},
  {path: 'procedure-add', component: ProcedureComponent},
  {path: 'procedure-all', component: ProcedureAllComponent},
  {path: 'procedure-update', component: ProcedureUpdateComponent},
]

@NgModule({
  declarations: [
    ProductComponent,
    ProductAllComponent,
    ProductUpdateComponent,
    ProcedureComponent,
    ProcedureAllComponent,
    ProcedureUpdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    EffectsModule.forFeature(),
    
  ],
  exports: [
    ProcedureComponent,
    ProductComponent,
    ProductAllComponent,
    ProcedureAllComponent,
  ]
})
export class ProductModule { }
