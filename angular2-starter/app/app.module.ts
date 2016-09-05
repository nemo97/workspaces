import { NgModule,NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CourseModule } from './course/course.module';
import { BookModule } from './book/book.module';
import { AppComponent } from './app.component';

import { appRoutingProviders,routing } from './app.routing'
import { PageNotFoundComponent } from './pagenotfound.component';

import { NgRedux,DevToolsExtension } from 'ng2-redux';
import { rootReducer,IAppState,enhancers } from './store/index';
const createLogger = require('redux-logger');

import {
  applyMiddleware,
  Store,
  combineReducers,
  compose,
  createStore
} from 'redux';


// export const store: Store<IAppState> = createStore(
//   rootReducer,devTool.isEnabled() ? devTool.enhancer() : f => f);

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
        DevToolsExtension,
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
  constructor(private ngRedux: NgRedux<IAppState>,
            private devTool: DevToolsExtension) {
    this.ngRedux.configureStore(rootReducer, {},
    [ createLogger() ],
    [...enhancers,devTool.isEnabled() ? devTool.enhancer() : f => f] 
    );
  }

// constructor(private ngRedux: NgRedux<IAppState>,  private zone:NgZone) {
//     this.ngRedux.provideStore(store);
//     this.ngRedux.subscribe(() => {
//             this.zone.run(() => {}); 
//     });
//   }
}