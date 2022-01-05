import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url_api = 'https://jsonplaceholder.typicode.com/comments'
  constructor(private http: HttpClient) { }

  getComments(){
    return this.http.get<Comment[]>(this.url_api)
  }
}
