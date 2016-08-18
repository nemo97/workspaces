import { Component } from '@angular/core';
<<<<<<< HEAD

@Component({
  selector: 'my-app',
  template: `<h3><a routerLink="/" routerLinkActive="active">Home!</a></h3>
       <!-- Routed views go here -->
        <nav>
          <a routerLink="/book-center" routerLinkActive="active">Book</a> | 
          <a routerLink="/courselist" routerLinkActive="active">Course</a>
        </nav>
        <router-outlet></router-outlet>
    `  
=======
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
>>>>>>> a6e08dd06e1c05190dfa16e4fc711b7e12fe38d8
})
export class AppComponent {



 }
