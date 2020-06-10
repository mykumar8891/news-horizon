import { Component,Input , OnInit } from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

  constructor() { }



  upvote() {
    console.log("called upvote from function in the Article Component");

    this.article.voteUp();
  }

  downvote() {
    console.log("called downvote from function in the Article Component");
    this.article.voteDown();
  }

  ngOnInit() {
  }

}
