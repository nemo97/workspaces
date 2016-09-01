"use strict";
var redux_1 = require('redux');
//const persistState = require('redux-localstorage');
var counter_reducer_1 = require('./counter.reducer');
var path_demo_reducer_1 = require('./path-demo.reducer');
var search_reducer_1 = require('./search.reducer');
;
exports.rootReducer = redux_1.combineReducers({
    counter: counter_reducer_1.counterReducer,
    pathDemo: path_demo_reducer_1.pathDemoReducer,
    search: search_reducer_1.searchReducer
});
exports.enhancers = [];
//# sourceMappingURL=index.js.map