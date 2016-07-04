import { RouterConfig,provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';

export const routes: RouterConfig = [    
    {path:'',redirectTo:'/course',pathMatch:'full'},
    {path:'course',component:CourseComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];