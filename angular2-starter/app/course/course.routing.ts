import { Routes,RouterModule } from '@angular/router';
import { CourseComponent } from './course.component';
import { CourseListComponent } from './course-list.component';
import {PageNotFoundComponent } from '../pagenotfound.component';

const courseRoutes: Routes = [
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

export const courseRoutingProviders: any[] = [

];

export const courseRouting = RouterModule.forChild(courseRoutes);