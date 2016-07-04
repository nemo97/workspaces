import { Component } from '@angular/core';

import { CourseService } from './course.service'

@Component({
  selector: 'course-list',
  template: `
              <div>{{title}}</div>              
              <ul>
                <li *ngFor="let c of courses">{{ c.id }} &nbsp; {{ c.courseName }}</li>
              </ul>
             `,
  providers: [CourseService]             
})
export class CourseListComponent {
  title = " Courses ";
  courses ;
  constructor(courseService :CourseService){
     courseService.getCourseList().then( cList => this.courses = cList ); 
  }
}
