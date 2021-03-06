import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BookComponent } from './book.component';
import { BookListComponent } from './book-list.component';
import { BookMainComponent } from './bookmain.component';
import { bookRoutingProviders,bookRouting } from './book.routing'
import { BookService } from './book.service'

@NgModule({
    declarations : [
             BookComponent
            ,BookListComponent
            ,BookMainComponent            
            ],                
    providers:[
        bookRoutingProviders
        ,BookService
    ],        
    imports :[
        BrowserModule,
        bookRouting
        ],    
})
export class BookModule{

}