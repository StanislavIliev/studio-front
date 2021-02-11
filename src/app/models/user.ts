export class User {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  uniqueString?: string;

  constructor(){
      this.username = '',
      this.password = '',
      this.email = '',
      this.firstName = '',
      this.lastName = '',
      this.phoneNumber = '',
      this.uniqueString = '';
  }
}
