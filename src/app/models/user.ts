export class User {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  UserToken?: string;
  phoneNumber?: string;
  uniqueString?: string;
  cart?: object;
  expirationDate?: Date

  constructor(){
      this.username = '',
      this.password = '',
      this.email = '',
      this.firstName = '',
      this.UserToken = '',
      this.lastName = '',
      this.phoneNumber = '',
      this.uniqueString = '',
      this.cart = null;
      this.expirationDate = null
  }
}
