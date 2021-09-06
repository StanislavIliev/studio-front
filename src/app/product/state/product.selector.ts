import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "src/app/models/product";
import { PROCEDURE_STATE_NAME, PRODUCT_STATE_NAME } from "./product.reducer";
import { ProductState } from "./product.state";

const getProductState = createFeatureSelector<ProductState>(PRODUCT_STATE_NAME);

export const addProduct = createSelector(getProductState, (state) => {
  return state;
});

export const getAllProducts = createSelector(getProductState, (state) => {
  let products: Product[] = [];
  products = state.products;
  return products;
});

const getProcedureState = createFeatureSelector<ProductState>(PROCEDURE_STATE_NAME);

export const addedProduct = createSelector(getProductState, (state) => {
  return state;
});

export const getAllProcedures = createSelector(getProductState, (state) => {
  let procedures: Product[] = [];
  procedures= state.procedures;
  return procedures;
});