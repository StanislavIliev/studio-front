import {User} from './user';

export class Order {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  manicure?: string;
  username?: User;

  constructor(){
    this.name = '',
      this.description = '',
      this.price = null,
    this.manicure = '';
    this.username = null;
  }
}
