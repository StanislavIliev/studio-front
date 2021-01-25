import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Comment} from '../../models/comment';
import {User} from '../../models/user';
import {CommentService} from '../../services/commentService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comment-update',
  templateUrl: './comment-update.component.html',
  styleUrls: ['./comment-update.component.scss']
})
export class CommentUpdateComponent implements OnInit {

  updateCommentForm: FormGroup;
  comment: Comment = new Comment();
  user: User = JSON.parse(localStorage.getItem('user'));

  constructor(
    private commentService: CommentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.updateCommentForm = new FormGroup({
      topic: new FormControl(null),
      description: new FormControl(null),
      user: new FormControl(this.user)
    });
  }

  updateComment(): any {

    const updatedComment = {...this.updateCommentForm.value};
    console.log(updatedComment);
    this.commentService.updateCommentForm(updatedComment)
      .subscribe((response) => {
        this.comment = response;
        console.log(this.comment);
        this.router.navigate(['/']);
      });
  }


}
