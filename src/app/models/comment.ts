import {User} from './user';

export class Comment {
  id?: number;
  name?: string;
  description?: string;
  username?: User;
  constructor(){
      this.name = '',
      this.description = '';
  }
}
