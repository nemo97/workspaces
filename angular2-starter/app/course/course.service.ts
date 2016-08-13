import {Observable} from 'rxjs/Rx'

export class CourseService {
    
    public getCourse() : string[] {
        return ["cources 1","cources 2","cources 3","cources 4","cources 5"];
    }

    public getCourseList() : Observable<string> {
        return Observable.from(["cources 1","cources 2","cources 3","cources 4","cources 5"]);
    }
}