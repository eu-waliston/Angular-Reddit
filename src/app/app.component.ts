import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[]; //<== component property 
    //The Article[] might look a little unfamiliar. We’re saying here that articles is an
    //Array of Articles.

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article: ${title.value} and link: ${link.value}`);
    return false;
  }

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('FullStack', 'http://fullstack.io', 3),
      new Article('Angular Homepage', 'http://angular.io', 3),
    ]


  }
}
