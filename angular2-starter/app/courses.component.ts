import { Component } from '@angular/core';
import {LocalStorage, WEB_STORAGE_PROVIDERS,ConfigureStorage} from "h5webstorage";

import { CourseService } from './courses.service'
import { Observable } from 'rxjs/Rx'
import {InputText} from 'primeng/primeng';

@Component({
  selector: 'course',
  template: `<h3>Hello User! </h3>
              {{title}}

              <ul>
                <li *ngFor="let c of courses">{{ c }}</li>
              </ul>
              <input type="text" pInputText/>
              <button (click)="clickMe()" > Click Me! </button>
              <div> 
                {{courseService.getCourseList() | json}}
                {{$message | async}}
                <div>hello</div>  
                {{obj | json}}
                <p>test {{ obj[key] }}</p>
                <ul>
                  <li *ngFor="let c of ($message | async)" > {{c}} </li> 
                </ul>
                </div>
             `,
  directives : [InputText],             
  providers: [CourseService,WEB_STORAGE_PROVIDERS,ConfigureStorage({ prefix: "myPrefix-" })]
})
export class CourseComponent {
  title = " Testing attribute ";
  
  obj : any = {a:3,b:4};
  key : any ="a";
  message$: Observable<string>;
  //cources = ["cources 1","cources 2","cources 3"];
  courses ;
  constructor(public courseService :CourseService,public localStorage: LocalStorage){
    this.courses = courseService.getCourse();
    this.localStorage.setItem("jsonKey", JSON.stringify({a:5,b:3}));
    this.message$ = this.courseService.getCourseList() ;
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
