import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, exhaustMap, map, mergeMap } from "rxjs/operators";
import { Order } from "src/app/models/order";
import { OrderService } from "src/app/services/orderService";
import { AppState } from "src/app/store/app.state";
import { allOrdersFail, allOrdersStart, allOrdersSuccess ,updateOrderStart,updateOrderSuccess,updateOrderFail, orderStart, orderSuccess, orderFail} from "./order.actions";


@Injectable()
export class OrderEffects {

    constructor(
        private actions$: Actions,
        private orderService: OrderService,
        private router: Router,
        private store: Store<AppState>
    ) { }
    productAdd$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(orderStart),
            exhaustMap((action) => {
                return this.orderService.addOrderForm(action.newOrder).pipe(
                    map((resp) => {
                        this.router.navigate(['/orders-all']);
                        this.store.dispatch(orderSuccess({message: "Order has been added succefuly!", newOrder: resp }));
                        return orderSuccess({
                            message: `Order was added successfully!`,
                            newOrder: resp
                        })
                    }),
                    catchError(() => {
                        return of(orderFail({ message: 'Error while adding the order!' }));
                    }));
            }))
    });

    ordersLoadAll$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(allOrdersStart),
            mergeMap(() => {
                return this.orderService.getAllOrders().pipe(
                    map((resp) => {
                        let orders: Order[] = resp;
                        this.router.navigate(['/orders-all']);
                        return allOrdersSuccess({ orders: orders, message: 'All orders' });
                    }),
                    catchError(() => {
                        return of(allOrdersFail({ message: 'Error when load all orders!' }));
                    }));
            }))
    }
    );

    orderUpdate$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateOrderStart),
            exhaustMap((action) => {
                return this.orderService.updateOrderForm(action.updatedOrder).pipe(
                    map((resp) => {
                        this.store.dispatch(updateOrderSuccess({message: "Order was updated successfuly", updatedOrder: resp }))
                        return updateOrderSuccess({ message: `Order was updated successfully!`, updatedOrder: resp })
                    }),
                    catchError(() => {
                        return of(updateOrderFail({ message: 'Error!' }));
                    }))
            }))
    });
}