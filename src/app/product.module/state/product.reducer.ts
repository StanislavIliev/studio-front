import { createReducer , on } from "@ngrx/store";
import { Procedure } from "src/app/models/procedure";
import { Product } from "src/app/models/product";
import { addProductSuccess, allProductSuccess, updateProductSuccess , addProcedureSuccess ,allProcedureSuccess ,updateProcedureSuccess } from "./product.actions";
import { initialProductState } from "./product.state";

export const PRODUCT_STATE_NAME = 'product';
export const PROCEDURE_STATE_NAME = 'procedure';


const _productReducer = createReducer(
  initialProductState,
   on(addProductSuccess, (state, action) => {
    let product: Product = {...action.newProduct};
    return {
        ...state,
        products: [...state.products , product]
    };
}),
on(allProductSuccess, (state, action) => {
    let products: Product[] = [];
    products = action.products;
    return {
        ...state,
        products: products
    };
}), on(addProcedureSuccess, (state, action) => {
    let procedure: Procedure = {...action.newProcedure};
    return {
        ...state,
        products: [...state.procedures , procedure]
    };
}),
on(allProcedureSuccess, (state, action) => {
    let procedures: Procedure[] = [];
    procedures = action.procedures;
    return {
        ...state,
        products: procedures
    };
}));

export function ProductReducer(state, action){
  return _productReducer(state,action);
}
