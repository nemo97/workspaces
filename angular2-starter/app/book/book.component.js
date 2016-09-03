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
var core_1 = require('@angular/core');
var ng2_redux_1 = require('ng2-redux');
var Observable_1 = require('rxjs/Observable');
var counter_actions_1 = require('../actions/counter.actions');
var BookComponent = (function () {
    function BookComponent(actions, ngRedux, zone) {
        this.actions = actions;
        this.ngRedux = ngRedux;
        this.zone = zone;
    }
    __decorate([
        ng2_redux_1.select('counter'), 
        __metadata('design:type', Observable_1.Observable)
    ], BookComponent.prototype, "counter$", void 0);
    BookComponent = __decorate([
        core_1.Component({
            selector: 'book-details',
            providers: [counter_actions_1.CounterActions],
            template: "Book details -WIP\n            <p>\n    Clicked: {{ counter$ | async }} times\n    <button (click)=\"actions.increment()\">+</button>\n    <button (click)=\"actions.decrement()\">-</button>\n    <button (click)=\"actions.incrementIfOdd()\">Increment if odd</button>\n    <button (click)=\"actions.incrementAsync(2222)\">Increment async</button>\n    <button (click)=\"actions.randomize()\">Set to random number</button>\n  </p>\n             "
        }), 
        __metadata('design:paramtypes', [counter_actions_1.CounterActions, ng2_redux_1.NgRedux, core_1.NgZone])
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;
//# sourceMappingURL=book.component.js.map