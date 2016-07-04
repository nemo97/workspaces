import { RouterConfig,provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { CourseListComponent } from './courselist.component'
import { DashboardComponent } from './dashboard.component';

export const routes: RouterConfig = [    
    {path:'',redirectTo:'/dashboard',pathMatch:'full'},
     {path:'dashboard',component:DashboardComponent},
    {path:'courselist',component:CourseListComponent},
    {path:'courses',component:CourseComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];