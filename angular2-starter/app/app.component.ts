import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h3>Home!</h3>
       <!-- Routed views go here -->
        <nav>
          <a routerLink="/course" routerLinkActive="active">Course</a> | 
          <a routerLink="/courselist" routerLinkActive="active">Course List</a>
        </nav>
        <router-outlet></router-outlet>
    `  
})
export class AppComponent { }
