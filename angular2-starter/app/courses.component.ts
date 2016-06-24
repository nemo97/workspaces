import { Component } from '@angular/core';

import { CourseService } from './courses.service'

@Component({
  selector: 'course',
  template: `<h3>Hello User! </h3>
              {{title}}
              
              <ul>
                <li *ngFor="#c of courses">{{ c }}</li>
              </ul>
             `,
  providers: [CourseService]             
})
export class CourseComponent {
  title = " Testing attribute ";
  //cources = ["cources 1","cources 2","cources 3"];
  courses ;
  constructor(courseService :CourseService){
    this.courses = courseService.getCourse(); 
  }
}
