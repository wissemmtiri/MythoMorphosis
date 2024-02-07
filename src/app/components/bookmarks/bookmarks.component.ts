import { Component } from '@angular/core';
import { Article } from 'src/app/models/articles/articles';
import { ArticleService } from 'src/app/services/articles-service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent {
  bookMarks!:Article[];
  constructor(private article: ArticleService) {  
  }
  ngOnInit() {
    this.getBookmarks();
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
  DeleteFromBookmarks(id: number) {
    this.article.removeFromBookMarks(id).subscribe({
      next: (res) => {
        console.log('Article removed from bookmarks:', res);
        this.refreshBookmarks();
        //window.location.reload()
      },
      error: (err) => {
        console.error('Error removing article from bookmarks:', err);
      },
    });
  }
  
    // Method to refresh bookmarked articles after deletion
    refreshBookmarks() {
      this.article.getBookmarks().subscribe({
        next: (bookmarkedArticles) => {
          this.bookMarks = bookmarkedArticles;
          console.log('Bookmarked articles refreshed:', this.bookMarks);
      },
        error:(err) => {
        console.error('Error refreshing bookmarked articles:', err);
      }
    });
  }
  getBookmarks(){
    this.article.getBookmarks().subscribe({
      next: (bookmarkedArticles) => {
        console.log(bookmarkedArticles);
        this.bookMarks = bookmarkedArticles;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  }
