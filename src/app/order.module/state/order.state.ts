import { Order } from "src/app/models/order";
import { createEntityAdapter, EntityState } from "@ngrx/entity";

export interface OrderState extends EntityState<Order> {
}
export const orderAdapter =  createEntityAdapter<Order>();

export const initialOrderState: OrderState = orderAdapter.getInitialState();

