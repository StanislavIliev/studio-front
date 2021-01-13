import {User} from './user';

export class Comment {
  id?: number;
  topic?: string;
  description?: string;
  username?: User;

  constructor(){
      this.topic = '',
      this.description = '';
      this.username = null;
  }
}
