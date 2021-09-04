import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, exhaustMap, map, mergeMap } from "rxjs/operators";
import { Procedure } from "src/app/models/procedure";
import { Product } from "src/app/models/product";
import { ProcedureService } from "src/app/services/procedureService";
import { ProductService } from "src/app/services/productService";
import { AppState } from "src/app/store/app.state";
import { addProcedureFail, addProcedureStart, addProcedureSuccess, addProductFail, addProductStart, addProductSuccess, allProcedureFail, allProcedureStart, allProcedureSuccess, allProductFail, allProductStart, allProductSuccess, updateProcedureFail, updateProcedureStart, updateProcedureSuccess, updateProductFail, updateProductStart, updateProductSuccess } from "./product.actions";


@Injectable()
export class ProductEffects {

    constructor(
        private actions$: Actions,
        private productService: ProductService,
        private procedureService: ProcedureService,
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
                        this.store.dispatch(updateProductSuccess({message: "Message was updated successfuly", updatedProduct: resp }))
                        return updateProductSuccess({ message: `Product ${resp.name} was updated successfully!`, updatedProduct: resp })
                    }),
                    catchError(() => {
                        return of(updateProductFail({ message: 'Error!' }));
                    }))
            }))
    });

    
    procedureAdd$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addProcedureStart),
            exhaustMap((action) => {
                return this.procedureService.addProcedureForm(action.newProcedure).pipe(
                    map((resp) => {
                        this.router.navigate(['/procedure-all']);
                        this.store.dispatch(addProcedureSuccess({message: "Procedure has been added succefuly!", newProcedure: resp }));
                        return addProcedureSuccess({
                            message: `Procedure ${resp.name} was added successfully!`,
                            newProcedure: resp
                        })
                    }),
                    catchError(() => {
                        return of(addProcedureFail({ message: 'Error while adding the procedure!' }));
                    }));
            }))
    });

    procedureLoadAll$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(allProcedureStart),
            mergeMap(() => {
                return this.procedureService.getAllProcedures().pipe(
                    map((resp) => {
                        let procedures: Procedure[] = resp;
                        this.router.navigate(['/procedures']);
                        return allProcedureSuccess({message: 'All procedures', procedures: procedures});
                    }),
                    catchError(() => {
                        return of(allProcedureFail({ message: 'Error!' }));
                    }));
            }))
    }
    );

    procedureUpdate$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateProcedureStart),
            exhaustMap((action) => {
                return this.procedureService.updateProcedure(action.updatedProcedure).pipe(
                    map((resp) => {
                        this.store.dispatch(updateProcedureSuccess({message: "Message was updated successfuly", updatedProcedure: resp }))
                        return updateProcedureSuccess({ message: `Procedure ${resp.name} was updated successfully!`, updatedProcedure: resp })
                    }),
                    catchError(() => {
                        return of(updateProcedureFail({ message: 'Error!' }));
                    }))
            }))
    });
}