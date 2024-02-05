import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articles/articles';
import { ArticleService } from 'src/app/services/articles-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sciencehub',
  templateUrl: './sciencehub.component.html',
  styleUrls: ['./sciencehub.component.css']
})
export class SciencehubComponent implements OnInit{
  articles:Article[]=[];
  constructor(private article: ArticleService) {  
  }
  ngOnInit() {
    this.getArticles();
  }
  getArticles(){
    this.article.getArticles().subscribe({
      next: (res) => {
        console.log(res);
        this.articles = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getArticleById(id:number){
    this.article.getArticleById(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  addToBookmarks(id:number){
    this.article.addToBookMarks(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  }
