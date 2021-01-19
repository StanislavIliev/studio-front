import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('http://localhost:8080/comments/all');
  }

  public addCommentForm(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`http://localhost:8080/comments/add`, comment);
  }

  getCommentById(id: string): Observable<Comment>{
    return this.http.get(`http://localhost:8080/comments/${id}`);
  }

  deleteCommentById(comment: Comment): Observable<Comment> {
    return this.http.post(`http://localhost:8080/comments/delete/`, comment);
  }

}
