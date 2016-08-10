import { Component } from '@angular/core';
import {LocalStorage, WEB_STORAGE_PROVIDERS,ConfigureStorage} from "h5webstorage";

import { CourseService } from './courses.service'
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'course',
  template: `<h3>Hello User! </h3>
              {{title}}

              <ul>
                <li *ngFor="let c of courses">{{ c }}</li>
              </ul>

              <button (click)="clickMe()" > Click Me! </button>
             `,
  providers: [CourseService,WEB_STORAGE_PROVIDERS,ConfigureStorage({ prefix: "myPrefix-" })]
})
export class CourseComponent {
  title = " Testing attribute ";
  //cources = ["cources 1","cources 2","cources 3"];
  courses ;
  constructor(courseService :CourseService,public localStorage: LocalStorage){
    this.courses = courseService.getCourse();
    this.localStorage.setItem("jsonKey", JSON.stringify({a:5,b:3}));

  }

  clickMe(){
    console.log("Clicked Me ..");
    this.localStorage.setItem("secondKey", "This will also "+new Date());
    let item:any  = this.localStorage.getItem("jsonKey");
    console.log('hello from localStorage '+item.a );

    Observable.of({a:5,b:3})
    .flatMap((x:any) => Observable.pairs(x))
    .subscribe(x => console.log("Output "+JSON.stringify(x)));

  }
}
