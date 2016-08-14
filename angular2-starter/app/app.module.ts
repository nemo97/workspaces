import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CourseModule } from './course/course.module';
import { BookModule } from './book/book.module';
import { AppComponent } from './app.component';

import { appRoutingProviders,routing } from './app.routing'
import { PageNotFoundComponent } from './pagenotfound.component';


@NgModule({
    declarations : [
            AppComponent                        
            ,PageNotFoundComponent
            ],                
    providers:[
        appRoutingProviders        
    ],        
    imports :[
        CourseModule,
        BookModule,
        BrowserModule,
        routing
        ],
    bootstrap : [ AppComponent ]
})
export class AppModule{

}