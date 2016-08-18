import { Component,Input } from '@angular/core';

import { CourseService } from './course.service'
import { CourseModel } from './course.model'

@Component({
  selector: 'course-details',
  template: `
              <div *ngIf="inputCourse">
                <div>{{title}}</div>              
                <div>Id : {{inputCourse.id}} Course Name : {{inputCourse.courseName}} </div>
               </div> 
             `,
  providers: [CourseService]             
})
export class CourseComponent {
  title = " Courses Details ";  
  
  @Input()
  inputCourse : CourseModel;

  constructor(public courseService :CourseService){
     
  }
}
