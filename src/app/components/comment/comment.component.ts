import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Comment} from '../../models/comment';
import {CommentService} from '../../services/commentService';
import { Router } from '@angular/router';
import {User} from '../../models/user';
import { UniqueString } from '../../models/UniqueString';

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
      private commentService: CommentService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.addCommentForm = new FormGroup({
      topic: new FormControl('' , [Validators.required, Validators.pattern('[A-Za-z0-9 ]+')]),
      description: new FormControl('' , [Validators.required, Validators.pattern('[A-Za-z0-9,. ]+')]),
      user: new FormControl(this.user)
    });
  }
  addComment(): any {

    const newComment = {...this.addCommentForm.value};
    console.log(newComment);
    this.commentService.addCommentForm(newComment)
      .subscribe((response) => {
        this.comment = response;
        console.log(this.comment);
        this.router.navigate(['/comments-all']);
      });
  }

  getCommentById(commentId: string): void{
    this.commentService.getCommentById(commentId)
      .subscribe((response) => {
        this.comment = response;
      });
  }
}
