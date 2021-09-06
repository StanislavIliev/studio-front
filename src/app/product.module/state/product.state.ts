import { Procedure } from "src/app/models/procedure";
import { Product } from "src/app/models/product";

export interface ProductState {
    products: Product[] ,
    procedures: Procedure[]
  }

export const initialProductState: ProductState = {
  products: [],
  procedures: []
}