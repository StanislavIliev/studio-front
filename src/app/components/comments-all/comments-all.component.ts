import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';
import { CommentService } from '../../services/commentService';


@Component({
  selector: 'app-comments-all',
  templateUrl: './comments-all.component.html',
  styleUrls: ['./comments-all.component.scss']
})
export class CommentsAllComponent implements OnInit {
  comments: Comment[] =  [];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getAllComments().subscribe((response) => {
      this.comments = response;
    });
  }

}
