import {User} from './user';

export class Order {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  manicureType?: string;
  username?: User;

  constructor(){
    this.name = '',
      this.description = '',
      this.price = null,
    this.manicureType = '';
  }
}
