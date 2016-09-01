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
/**
 * Action creators in Angular 2. We may as well adopt a more
 * class-based approach to satisfy Angular 2's OOP idiom. It
 * has the advantage of letting us use the dependency injector
 * as a replacement for redux-thunk.
 */
var CounterActions = (function () {
    function CounterActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    CounterActions.prototype.increment = function () {
        this.ngRedux.dispatch({ type: CounterActions.INCREMENT_COUNTER });
    };
    CounterActions.prototype.decrement = function () {
        this.ngRedux.dispatch({ type: CounterActions.DECREMENT_COUNTER });
    };
    CounterActions.prototype.incrementIfOdd = function () {
        var counter = this.ngRedux.getState().counter;
        if (counter % 2 !== 0) {
            this.increment();
        }
    };
    CounterActions.prototype.incrementAsync = function (delay) {
        if (delay === void 0) { delay = 1000; }
        setTimeout(this.increment.bind(this), delay);
    };
    CounterActions.prototype.randomize = function () {
        this.ngRedux.dispatch({
            type: CounterActions.RANDOMIZE_COUNTER,
            payload: 10
        });
    };
    CounterActions.INCREMENT_COUNTER = 'INCREMENT_COUNTER';
    CounterActions.DECREMENT_COUNTER = 'DECREMENT_COUNTER';
    CounterActions.RANDOMIZE_COUNTER = 'RANDOMIZE_COUNTER';
    CounterActions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ng2_redux_1.NgRedux])
    ], CounterActions);
    return CounterActions;
}());
exports.CounterActions = CounterActions;
//# sourceMappingURL=counter.actions.js.map