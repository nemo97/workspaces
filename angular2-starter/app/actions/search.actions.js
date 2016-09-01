"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ng2_redux_1 = require('ng2-redux');
exports.SEARCH_ACTIONS = {
    SEARCH: 'SEARCH',
    SEARCH_RESULT: 'SEARCH_RESULT',
    TERMINATE: 'TERMINATE',
    SEARCH_NEXT: 'SEARCH_NEXT',
    SEARCH_PREVIOUS: 'SEARCH_PREVIOUS'
};
var core_1 = require('@angular/core');
var SearchActions = (function () {
    function SearchActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    SearchActions.prototype.searchDispatch = function (keyword) {
        this.ngRedux.dispatch(this.search(keyword));
    };
    SearchActions.prototype.fetchResultDispatch = function (total) {
        this.ngRedux.dispatch(this.fetchResult(total));
    };
    SearchActions.prototype.search = function (keyword) {
        return {
            type: exports.SEARCH_ACTIONS.SEARCH,
            payload: keyword
        };
    };
    SearchActions.prototype.fetchResult = function (total) {
        return {
            type: exports.SEARCH_ACTIONS.SEARCH_RESULT,
            payload: {
                total: total
            }
        };
    };
    SearchActions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ng2_redux_1.NgRedux])
    ], SearchActions);
    return SearchActions;
}());
exports.SearchActions = SearchActions;
//# sourceMappingURL=search.actions.js.map