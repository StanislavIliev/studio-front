import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, exhaustMap, map, mergeMap } from "rxjs/operators";
import { Product } from "src/app/models/product";
import { ProductService } from "src/app/services/productService";
import { AppState } from "src/app/store/app.state";
import { addProductFail, addProductStart, addProductSuccess, allProductFail, allProductStart, allProductSuccess, updateProcedureSuccess, updateProductFail, updateProductStart, updateProductSuccess } from "./product.actions";


@Injectable()
export class ProductEffects {

    constructor(
        private actions$: Actions,
        private productService: ProductService,
        private router: Router,
        private store: Store<AppState>
    ) { }

    productAdd$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addProductStart),
            exhaustMap((action) => {
                return this.productService.addProductForm(action.newProduct).pipe(
                    map((resp) => {
                        this.router.navigate(['/product-all']);
                        this.store.dispatch(addProductSuccess({message: "Product has been added succefuly!", newProduct: resp }));
                        return addProductSuccess({
                            message: `Product ${resp.name} was added successfully!`,
                            newProduct: resp
                        })
                    }),
                    catchError(() => {
                        return of(addProductFail({ message: 'Error while adding the product!' }));
                    }));
            }))
    });

    productLoadAll$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(allProductStart),
            mergeMap(() => {
                return this.productService.getAllProducts().pipe(
                    map((resp) => {
                        let products: Product[] = resp;
                        this.router.navigate(['/products']);
                        return allProductSuccess({message: 'All products', products: products});
                    }),
                    catchError(() => {
                        return of(allProductFail({ message: 'Error when load all products!' }));
                    }));
            }))
    }
    );

    productUpdate$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateProductStart),
            exhaustMap((action) => {
                return this.productService.updateProduct(action.updatedProduct).pipe(
                    map((resp) => {
                        this.store.dispatch(updateProductSuccess({message: "Message was removed successfuly", updatedProduct: resp }))
                        return updateProductSuccess({ message: `Product ${resp.name} was updated successfully!`, updatedProduct: resp })
                    }),
                    catchError(() => {
                        return of(updateProductFail({ message: 'Error!' }));
                    }))
            }))
    })
}