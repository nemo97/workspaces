import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CourseModule } from './course/course.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list.component';
import { appRoutingProviders,routing } from './app.routing'
import { PageNotFoundComponent } from './pagenotfound.component';
import { BookService } from './book.service'

@NgModule({
    declarations : [
            AppComponent
            ,BookListComponent            
            ,PageNotFoundComponent
            ],                
    providers:[
        appRoutingProviders
        ,BookService
    ],        
    imports :[
        CourseModule,
        BrowserModule,
        routing
        ],
    bootstrap : [ AppComponent ]
})
export class AppModule{

}