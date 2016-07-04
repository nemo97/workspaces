import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CourseComponent } from './course.component';
@Component({
  selector: 'my-app',
  template: `
  <div> Hello World Application </div>
  <div>&nbsp;</div>
  <nav>
    <a [routerLink]="['/dashboard']">Dashboard</a> |
    <a [routerLink]="['/courselist']">Courses</a> |
    <a [routerLink]="['/course']">Course</a> | 
    <a>About!</a> 
  </nav>
  <div>&nbsp;</div>
  <router-outlet></router-outlet>       
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {



 }
