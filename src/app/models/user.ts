export class User {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  token?: string;
  phoneNumber?: string;
  uniqueString?: string;
  cart?: object;

  constructor(){
      this.username = '',
      this.password = '',
      this.email = '',
      this.firstName = '',
      this.token = '',
      this.lastName = '',
      this.phoneNumber = '',
      this.uniqueString = '',
      this.cart = null;
  }
}
