"use strict";
var router_1 = require('@angular/router');
var course_component_1 = require('./course.component');
var course_list_component_1 = require('./course-list.component');
var courseRoutes = [
    { path: 'course', component: course_component_1.CourseComponent },
    {
        path: 'courselist',
        component: course_list_component_1.CourseListComponent,
        data: {
            title: 'Heroes List'
        }
    }
];
exports.courseRoutingProviders = [];
exports.courseRouting = router_1.RouterModule.forChild(courseRoutes);
//# sourceMappingURL=course.routing.js.map