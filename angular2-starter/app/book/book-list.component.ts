import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'book-list',
  template: `<div>
                <h3>{{title}}</h3>
                <ul>
                  <li *ngFor="let c of bookList">{{ c }}</li>
                </ul>             
              </div>
             `,
})
export class BookListComponent {
  title : string ="Book List!";
  bookList ;

  constructor(private bookService :BookService){
    this.bookList  = bookService.getBookList();  
  }  
}
