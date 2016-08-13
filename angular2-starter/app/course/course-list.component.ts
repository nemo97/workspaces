import { Component } from '@angular/core';
import { CourseService } from './course.service'
@Component({
  selector: 'course-list',
  template: `<div>
                <h3>{{title}}</h3>
                <ul>
                  <li *ngFor="let c of courses">{{ c }}</li>
                </ul>             
              </div>
             `,
})
export class CourseListComponent {
  title : string ="Course List!";

  courses ;
  constructor(public courseService :CourseService){
    this.courses = courseService.getCourse();  
  }  
}
