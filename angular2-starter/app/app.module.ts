import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CourseModule } from './course/course.module';
import { BookModule } from './book/book.module';
import { AppComponent } from './app.component';

import { appRoutingProviders,routing } from './app.routing'
import { PageNotFoundComponent } from './pagenotfound.component';

import { NgRedux } from 'ng2-redux';
import { rootReducer,IAppState,enhancers } from './store/index';
import {
  applyMiddleware,
  Store,
  combineReducers,
  compose,
  createStore
} from 'redux';




@NgModule({
    declarations : [
            AppComponent                        
            ,PageNotFoundComponent
            ],                
    providers:[
        NgRedux,
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
  constructor(private ngRedux: NgRedux<IAppState>) {
    this.ngRedux.configureStore(rootReducer, {}, enhancers);
  }
}