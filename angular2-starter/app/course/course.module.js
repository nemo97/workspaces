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
var platform_browser_1 = require('@angular/platform-browser');
var course_component_1 = require('./course.component');
var course_list_component_1 = require('./course-list.component');
var course_routing_1 = require('./course.routing');
var course_service_1 = require('./course.service');
var CourseModule = (function () {
    function CourseModule() {
    }
    CourseModule = __decorate([
        core_1.NgModule({
            declarations: [
                course_component_1.CourseComponent,
                course_list_component_1.CourseListComponent
            ],
            providers: [
                course_routing_1.courseRoutingProviders,
                course_service_1.CourseService
            ],
            imports: [
                platform_browser_1.BrowserModule,
                course_routing_1.courseRouting
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], CourseModule);
    return CourseModule;
}());
exports.CourseModule = CourseModule;
//# sourceMappingURL=course.module.js.map