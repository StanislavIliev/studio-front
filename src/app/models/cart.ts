import {Product} from './product';
import {Procedure} from './procedure';

export class Cart {
  id?: number;
  procedure?: Procedure;
  product?: Product;

  constructor(){
      this.procedure = null,
      this.product = null;
  }
}
