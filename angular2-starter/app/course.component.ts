import { Component } from '@angular/core';

import { CourseService } from './course.service'

@Component({
  selector: 'course',
  template: `
              <div>{{title}}</div>              
              <ul>
                <li *ngFor="let c of courses">{{ c }}</li>
              </ul>
             `,
  providers: [CourseService]             
})
export class CourseComponent {
  title = " Courses Details ";  
  courses ;
  constructor(courseService :CourseService){
    this.courses = courseService.getCourseList(); 
  }
}
