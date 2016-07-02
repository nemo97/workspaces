import { Component } from '@angular/core';
import { CourseComponent } from './courses.component';
@Component({
  selector: 'my-app',
  template: '<h1>Hello World!</h1><course></course>',
  directives: [CourseComponent]
})
export class AppComponent { }
