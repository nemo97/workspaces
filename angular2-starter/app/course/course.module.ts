import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CourseComponent } from './course.component';
import { CourseListComponent } from './course-list.component';
import { courseRoutingProviders,courseRouting } from './course.routing'
import { CourseService } from './course.service'

@NgModule({
    declarations : [
             CourseComponent
            ,CourseListComponent            
            ],                
    providers:[
        courseRoutingProviders
        ,CourseService
    ],        
    imports :[
        BrowserModule,
        courseRouting
        ],    
})
export class CourseModule{

}