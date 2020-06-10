import { Component,Input, OnInit } from '@angular/core';
import {Article} from '../article';
import {ArticleService} from '../article.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  private  articles: Observable<Article[]>;
  constructor(
    private articleService: ArticleService,
     private activeRoute: ActivatedRoute
  ) {
  this.articles = articleService.orderedArticles;
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      const sourceKey = params['sourceKey'];
      this.articleService.updateArticles(sourceKey);
    });
  }

}
