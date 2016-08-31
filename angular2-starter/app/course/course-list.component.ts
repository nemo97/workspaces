import { Component } from '@angular/core';
import { CourseService } from './course.service'


let index =0;
@Component({
  selector: 'course-list',
  template: `<div>
                <h3>{{title}}</h3>
                <ul>
                  <li *ngFor="let c of courses"><a (click)="selectCourse()"> {{ c }} </a></li>
                </ul> 
                <a (click)="addCourse($event)" >Click Me</a>            
              </div>
              <br/>
              <br/>
              <br/>
              <course> </course>
             `,
})
export class CourseListComponent {
  title : string ="Course List!";

  courses ;
  constructor(public courseService :CourseService){
    this.courses = courseService.getCourse();  
  }
  
  addCourse(event) {
     console.log(" in add course methor");
     let coursesTemp = new Array<string>() ;
     coursesTemp.push("Test "+(index++));
     this.courses = coursesTemp;
  } 
  selectCourse (courseSelect){
    console.log(" courseSelect "+courseSelect);    
  } 
}
