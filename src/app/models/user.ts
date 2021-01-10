export class User {
  id?: number;
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  phoneNumber?: string;
  token?: string;
  constructor(){
      this.username = '',
      this.password = '',
      this.email = '',
      this.phoneNumber = '',
      this.token = '';
  }
}
