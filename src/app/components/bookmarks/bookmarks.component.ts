import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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
        // Assuming you have a method to refresh your bookmarked articles after deletion
        this.refreshBookmarks();
      },
      error: (err) => {
        console.error('Error removing article from bookmarks:', err);
      },
    });
  }
  
    // Method to refresh bookmarked articles after deletion
    refreshBookmarks() {
    // Call a method to fetch the latest bookmarked articles and update your local data
      this.article.getBookmarks().subscribe({
        next: (bookmarkedArticles) => {
        // Update your local data (e.g., update the bookmarks array)
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
      next: (res) => {
        console.log(res);
        this.bookMarks = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  }
