import { Component } from '@angular/core';

import { CourseService } from './courses.service'

@Component({
  selector: 'course-list',
  template: `
              <div>{{title}}</div>              
              <ul>
                <li *ngFor="let c of courses">{{ c }}</li>
              </ul>
             `,
  providers: [CourseService]             
})
export class CourseListComponent {
  title = " Courses ";
  courses ;
  constructor(courseService :CourseService){
    this.courses = courseService.getCourse(); 
  }
}
