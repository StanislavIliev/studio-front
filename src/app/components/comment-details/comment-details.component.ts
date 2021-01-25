import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Comment} from '../../models/comment';
import {User} from '../../models/user';
import {CommentService} from '../../services/commentService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.scss']
})
export class CommentDetailsComponent implements OnInit {

  CommentDetailsForm: FormGroup;
  comment: Comment = new Comment();
  user: User = JSON.parse(localStorage.getItem('user'));

  constructor(
    private commentService: CommentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.CommentDetailsForm = new FormGroup({
      topic: new FormControl(null),
      description: new FormControl(null),
      user: new FormControl(this.user)
    });
  }
  deleteComment(): any {

    const newComment = {...this.CommentDetailsForm.value};
    console.log(newComment);
    this.commentService.deleteCommentById(newComment)
      .subscribe((response) => {
        this.comment = response;
        console.log(this.comment);
        this.router.navigate(['/']);
      });
  }

  getCommentById(commentId: string): void{
    this.commentService.getCommentById(commentId)
      .subscribe((response) => {
        this.comment = response;
      });
  }
}
