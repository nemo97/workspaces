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
var h5webstorage_1 = require("h5webstorage");
var course_service_1 = require('./course.service');
var Rx_1 = require('rxjs/Rx');
var primeng_1 = require('primeng/primeng');
var CourseComponent = (function () {
    function CourseComponent(courseService, localStorage) {
        this.courseService = courseService;
        this.localStorage = localStorage;
        this.title = " Testing attribute ";
        this.obj = { a: 3, b: 4 };
        this.key = "a";
        this.courses = courseService.getCourse();
        this.localStorage.setItem("jsonKey", JSON.stringify({ a: 5, b: 3 }));
        this.message$ = this.courseService.getCourseList();
    }
    CourseComponent.prototype.clickMe = function () {
        console.log("Clicked Me ..");
        this.localStorage.setItem("secondKey", "This will also " + new Date());
        var item = this.localStorage.getItem("jsonKey");
        console.log('hello from localStorage ' + item.a);
        Rx_1.Observable.of({ a: 5, b: 3 })
            .flatMap(function (x) { return Rx_1.Observable.pairs(x); })
            .subscribe(function (x) { return console.log("Output " + JSON.stringify(x)); });
    };
    CourseComponent = __decorate([
        core_1.Component({
            selector: 'course',
            template: "<h3>Hello User! </h3>\n              {{title}}\n\n              <ul>\n                <li *ngFor=\"let c of courses\">{{ c }}</li>\n              </ul>\n              <input type=\"text\" pInputText/>\n              <button (click)=\"clickMe()\" > Click Me! </button>\n              <div> \n                {{courseService.getCourseList() | json}}\n                {{$message | async}}\n                <div>hello</div>  \n                {{obj | json}}\n                <p>test {{ obj[key] }}</p>\n                <ul>\n                  <li *ngFor=\"let c of ($message | async)\" > {{c}} </li> \n                </ul>\n                </div>\n             ",
            directives: [primeng_1.InputText],
            providers: [course_service_1.CourseService, h5webstorage_1.WEB_STORAGE_PROVIDERS, h5webstorage_1.ConfigureStorage({ prefix: "myPrefix-" })]
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService, h5webstorage_1.LocalStorage])
    ], CourseComponent);
    return CourseComponent;
}());
exports.CourseComponent = CourseComponent;
//# sourceMappingURL=course.component.js.map