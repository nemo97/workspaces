import { NgModule,NgZone } from '@angular/core';
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


export const store: Store<IAppState> = createStore(
  rootReducer);

// const store : Store<IAppState> = createStore(rootReducer, {}, 
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   );

// seems this is better solution than zone update
//https://github.com/zalmoxisus/redux-devtools-extension/issues/44

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
//   constructor(private ngRedux: NgRedux<IAppState>) {
//     this.ngRedux.configureStore(rootReducer, {}, enhancers);
//   }

constructor(private ngRedux: NgRedux<IAppState>,  private zone:NgZone) {
    this.ngRedux.provideStore(store);
    this.ngRedux.subscribe(() => {
            this.zone.run(() => {}); 
    });
  }
}