import { createReducer , on } from "@ngrx/store";
import { initialOrderState, orderAdapter } from "./order.state";
import { orderSuccess ,updateOrderSuccess, allOrdersSuccess } from "./order.actions";



const _orderReducer = createReducer(initialOrderState,
    on(orderSuccess, (state, action) => {
      return orderAdapter.addOne(action.newOrder , state);

    }),
    on(allOrdersSuccess, (state, action) => {
    return orderAdapter.setAll(action.orders ,state);
    })
);

export function OrderReducer(state, action){
  return _orderReducer(state,action);
}
