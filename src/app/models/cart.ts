import {Product} from './product';
import {Procedure} from './procedure';

export class Cart {
  id?: string;
  procedures?: Procedure [];
  products?: Product [];
  subtotal?: number;

  constructor(){
    this.procedures = null,
      this.products = null;
    this.subtotal = null;
  }
}
