import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterStateUrl } from "src/app/store/router/custom.serializer";
import { getCurrentRoute } from "src/app/store/router/router.selector";
import { OrderState, orderAdapter } from "./order.state";



export const ORDER_STATE_NAME = 'order';
const getOrderState = createFeatureSelector<OrderState>(ORDER_STATE_NAME);
export const orderSelectors = orderAdapter.getSelectors(); 

export const getOrderEntities = createSelector(getOrderState , orderSelectors.selectEntities);
export const getOrders = createSelector(getOrderState, orderSelectors.selectAll);

export const getOrderById = createSelector(
  getOrderEntities , getCurrentRoute,(orders, route: RouterStateUrl) => {
    return orders ? orders[route.params['id']] : null;
});
