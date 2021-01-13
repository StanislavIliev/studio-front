import {User} from './user';

export class Order {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  manicureType?: string;
  username?: string;
  email?: string;
  phoneNumber?: number;

  constructor(){
    this.name = '',
      this.description = '',
      this.price = null,
    this.manicureType = '';
    this.username = '';
    this.email = '';
    this.phoneNumber = null;
  }
}
