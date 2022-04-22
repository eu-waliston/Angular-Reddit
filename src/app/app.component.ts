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
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;

    //This will:
    //1. create a new Article instance with the submitted title and URL
    //2. add it to the array of Articles and
    //3. clear the input field values

  }

  sortdArticles(): Article[] {
    return this.articles.sort( (a: Article, b: Article) => b.votes - a.votes)
  }

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('FullStack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ]
  }
}
