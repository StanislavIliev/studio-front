import { createAction, props } from "@ngrx/store";
import { Procedure } from "../../models/procedure";
import { Product } from '../../models/product';

export const ADD_PRODUCT_START = '[user] add product start';
export const ADD_PRODUCT_SUCCESS = '[user] add product success';
export const ADD_PRODUCT_FAIL = '[user] add product fail';

export const addProductStart = createAction(ADD_PRODUCT_START, props<{newProduct: Product}>());
export const addProductSuccess = createAction(ADD_PRODUCT_SUCCESS, props<{message: string ,newProduct: Product}>());
export const addProductFail = createAction(ADD_PRODUCT_FAIL, props<{message: string}>());

export const ALL_PRODUCT_START = '[user] all products start';
export const ALL_PRODUCT_SUCCESS = '[user] all products success';
export const ALL_PRODUCT_FAIL = '[user] all products fail';

export const allProductStart = createAction(ALL_PRODUCT_START);
export const allProductSuccess = createAction(ALL_PRODUCT_SUCCESS, props<{products: Product[], message: string}>());
export const allProductFail = createAction(ALL_PRODUCT_FAIL, props<{message: string}>());

export const UPDATE_PRODUCT_START = '[user] update product start';
export const UPDATE_PRODUCT_SUCCESS = '[user] update product success';
export const UPDATE_PRODUCT_FAIL = '[user] update product fail';

export const updateProductStart = createAction(UPDATE_PRODUCT_START, props<{updatedProduct: Product}>());
export const updateProductSuccess = createAction(UPDATE_PRODUCT_SUCCESS, props<{ message: string,updatedProduct: Product}>());
export const updateProductFail = createAction(UPDATE_PRODUCT_FAIL, props<{message: string}>());



export const ALL_PROCEDURE_START = '[user] all procedures start';
export const ALL_PROCEDURE_SUCCESS = '[user] all procedures success';
export const ALL_PROCEDURE_FAIL = '[user] all procedures fail';

export const allProcedureStart = createAction(ALL_PRODUCT_START);
export const allProcedureSuccess = createAction(ALL_PRODUCT_SUCCESS, props<{procedures: Procedure[], message: string}>());
export const allProcedureFail = createAction(ALL_PRODUCT_FAIL, props<{message: string}>());

export const ADD_PROCEDURE_START = '[user] add procedure start';
export const ADD_PROCEDURE_SUCCESS = '[user] add procedure success';
export const ADD_PROCEDURE_FAIL = '[user] add procedure fail';

export const addProcedureStart = createAction(ADD_PRODUCT_START, props<{newProcedure: Procedure}>());
export const addProcedureSuccess = createAction(ADD_PRODUCT_SUCCESS, props<{ message: string ,newProcedure: Procedure}>());
export const addProcedureFail = createAction(ADD_PRODUCT_FAIL, props<{message: string}>());

export const UPDATE_PROCEDURE_START = '[user] update procedure start';
export const UPDATE_PROCEDURE_SUCCESS = '[user] update procedure success';
export const UPDATE_PROCEDURE_FAIL = '[user] update procedure fail';

export const updateProcedureStart = createAction(UPDATE_PRODUCT_START, props<{updatedProcedure: Procedure}>());
export const updateProcedureSuccess = createAction(UPDATE_PRODUCT_SUCCESS, props<{ message: string,updatedProcedure: Procedure}>());
export const updateProcedureFail = createAction(UPDATE_PRODUCT_FAIL, props<{message: string}>());
