import { Component } from '@angular/core';

import { CourseService } from './course.service'
import { CourseModel } from './course.model';
import { CourseComponent } from './course.component';

@Component({
  selector: 'course-list',
  template: `
              <div>{{title}}</div>              
              <ul>
                <li *ngFor="let c of courses" (click)="onSelect(c)">{{ c.id }} &nbsp; 
                  {{ c.courseName }}
                </li>
              </ul>
              <course-details [inputCourse]="selectedCourse"></course-details>
             `,
  directives:[CourseComponent],            
  providers: [CourseService]             
})
export class CourseListComponent {
  title = " Courses ";
  courses ;
  selectedCourse : CourseModel;

  constructor(public courseService :CourseService){
     courseService.getCourseList().then( cList => this.courses = cList ); 
  }

  onSelect ( course : CourseModel) {
      this.selectedCourse  = course; 
  }
} 
