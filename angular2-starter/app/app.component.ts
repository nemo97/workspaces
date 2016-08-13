import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h3><a routerLink="/" routerLinkActive="active">Home!</a></h3>
       <!-- Routed views go here -->
        <nav>
          <a routerLink="/booklist" routerLinkActive="active">Book</a> | 
          <a routerLink="/courselist" routerLinkActive="active">Course</a>
        </nav>
        <router-outlet></router-outlet>
    `  
})
export class AppComponent { }
