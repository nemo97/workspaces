import { Component } from '@angular/core';

@Component({
  selector: 'book-module',
  template: `       
        <nav>
          <a routerLink="/book-center/book" routerLinkActive="active">Book</a> |
          <a routerLink="/book-center/storybook" routerLinkActive="active">Story Book</a> | 
          <a routerLink="/book-center/childrenbook" routerLinkActive="active">Children Book</a>
        </nav>
        <router-outlet></router-outlet>
    `  
})
export class BookMainComponent { }
