import {Product} from './product';
import {Procedure} from './procedure';

export class Cart {
  id?: string;
  procedure?: Procedure;
  product?: Product;

  constructor(){
  }
}
