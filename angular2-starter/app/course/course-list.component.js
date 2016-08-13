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
var course_service_1 = require('./course.service');
var CourseListComponent = (function () {
    function CourseListComponent(courseService) {
        this.courseService = courseService;
        this.title = "Course List!";
        this.courses = courseService.getCourse();
    }
    CourseListComponent = __decorate([
        core_1.Component({
            selector: 'course-list',
            template: "<div>\n                <h3>{{title}}</h3>\n                <ul>\n                  <li *ngFor=\"let c of courses\">{{ c }}</li>\n                </ul>             \n              </div>\n             ",
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService])
    ], CourseListComponent);
    return CourseListComponent;
}());
exports.CourseListComponent = CourseListComponent;
//# sourceMappingURL=course-list.component.js.map