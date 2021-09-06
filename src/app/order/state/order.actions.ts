import { createAction, props } from "@ngrx/store";
import { Order } from "src/app/models/order";


export const UPDATE_ORDER_START = '[user] update order start';
export const UPDATE_ORDER_SUCCESS = '[user] update order success';
export const UPDATE_ORDER_FAIL = '[user] update order fail';

export const updateOrderStart = createAction(UPDATE_ORDER_START, props<{updatedOrder: Order}>());
export const updateOrderSuccess = createAction(UPDATE_ORDER_SUCCESS, props<{message: string ,updatedOrder: Order}>());
export const updateOrderFail = createAction(UPDATE_ORDER_FAIL, props<{message: string}>());


export const ALL_ORDER_START = '[user] all orders start';
export const ALL_ORDER_SUCCESS = '[user] all orders success';
export const ALL_ORDER_FAIL = '[user] all orders fail';

export const allOrdersStart = createAction(ALL_ORDER_START);
export const allOrdersSuccess = createAction(ALL_ORDER_SUCCESS, props<{ orders:Order[] , message: string }>());
export const allOrdersFail = createAction(ALL_ORDER_FAIL, props<{message: string}>());

export const ORDER_DETAILS_START = '[user] order details start';
export const ORDER_DETAILS_SUCCESS = '[user] order details success';
export const ORDER_DETAILS_FAIL = '[user] order details fail';

export const orderStart = createAction(ORDER_DETAILS_START, props<{ newOrder: Order}>());
export const orderSuccess = createAction(ORDER_DETAILS_SUCCESS, props<{ newOrder: Order , message: string }>());
export const orderFail = createAction(ORDER_DETAILS_FAIL, props<{message: string}>());
