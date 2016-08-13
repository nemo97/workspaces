"use strict";
var Rx_1 = require('rxjs/Rx');
var CourseService = (function () {
    function CourseService() {
    }
    CourseService.prototype.getCourse = function () {
        return ["cources 1", "cources 2", "cources 3", "cources 4", "cources 5"];
    };
    CourseService.prototype.getCourseList = function () {
        return Rx_1.Observable.from(["cources 1", "cources 2", "cources 3", "cources 4", "cources 5"]);
    };
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map