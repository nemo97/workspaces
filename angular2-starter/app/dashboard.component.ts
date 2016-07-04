import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CourseComponent } from './course.component';
@Component({
  selector: 'dashboard',
  template: `
  <div> Hello World Application </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class DashboardComponent {



 }
