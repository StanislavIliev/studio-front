import {User} from './user';

export class Comment {
  id?: string;
  topic?: string;
  description?: string;
  username?: User;

  constructor(){
      this.topic = '',
      this.description = '';
      this.username = null;
  }
}
