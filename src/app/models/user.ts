export class User {
  id?: number;
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  token?: string;

  constructor(){
      this.username = '',
      this.password = '',
      this.email = '',
      this.firstName = '',
      this.lastName = '',
      this.phoneNumber = '',
      this.token = '';
  }
}
