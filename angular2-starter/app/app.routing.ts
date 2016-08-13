import { Routes,RouterModule } from '@angular/router';
import { CourseComponent } from './course.component';
import { CourseListComponent } from './course-list.component';
import {PageNotFoundComponent } from './pagenotfound.component';

const appRoutes: Routes = [
   { path: '', redirectTo:'/course',terminal:true}, 
  { path: 'course', component: CourseComponent },
  {
    path: 'courselist',
    component: CourseListComponent,
    data: {
      title: 'Heroes List'
    }
  },  
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);