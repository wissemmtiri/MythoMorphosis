import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent {
   bookmarks = [
    {
      'title': 'Article 1',
      'reference': 'https://www.google.com',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.'
    },
    {
      'title': 'Article 2',
      'reference': 'https://www.google.com',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.'
    },
    {
      'title': 'Article 3',
      'reference': 'https://www.google.com',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.'
    },
    {
      'title': 'Article 4',
      'reference': 'https://www.google.com',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.'
    },
    {
      'title': 'Article 5',
      'reference': 'https://www.google.com',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.'
    },
    {
      'title': 'Article 6',
      'reference': 'https://www.google.com',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.'
     }
  ]
}
