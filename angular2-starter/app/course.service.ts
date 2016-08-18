import { CourseModel } from './course.model'
export class CourseService {
    
    COURSE : CourseModel[] = [
        {id:1,courseName:"Course1"},
        {id:2,courseName:"Course2"},
        {id:3,courseName:"Course3"},
        {id:4,courseName:"Course4"},
        {id:5,courseName:"Course5"} 
    ];

    getCourseList() : Promise<CourseModel[]> {
        return Promise.resolve(this.COURSE);
    }


}