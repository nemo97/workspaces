import {Observable} from 'rxjs/Rx'

export class BookService {
    
    public getBookList() : string[] {
        return ["Book 1","Book 2","Book 3","Book 4","Book 5"];
    }

    // public getCourseList() : Observable<string> {
    //     return Observable.from(["cources 1","cources 2","cources 3","cources 4","cources 5"]);
    // }
}