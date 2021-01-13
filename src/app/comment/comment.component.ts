import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Comment} from '../models/comment';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import {User} from '../models/user';
import { Token } from '../models/token';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  addCommentForm: FormGroup;
  comment: Comment = new Comment();
  user: User = JSON.parse(localStorage.getItem('user'));

  constructor(
      private authService: AuthService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.addCommentForm = new FormGroup({
      name: new FormControl(null),
      description: new FormControl(null),
      user: new FormControl(this.user)
    });
  }
  addComment(): any {

    const newComment = {...this.addCommentForm.value};
    console.log(newComment);
    this.authService.addCommentForm(newComment)
      .subscribe((response) => {
        this.comment = response;
        console.log(this.comment);
       // this.router.navigate(['/all']);
      });
  }

}
