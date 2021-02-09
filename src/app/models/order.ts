import {User} from './user';

export class Order {
  id?: number;
  description?: string;
  price?: number;
  procedure?: string;
  product?: string;
  username?: User;

  constructor(){
        this.description = '',
        this.price = null,
        this.procedure = '',
        this.product = '',
        this.username = null;
  }
}
