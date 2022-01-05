import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/models/comment';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: Comment[] = []
  constructor(public commentService: CommentService) { }

  ngOnInit(): void {
    this.getComments()
  }

  getComments(){
    this.commentService.getComments().subscribe(
      res => {this.comments = res},
      err => console.error(err)
      
    )
  }
}
