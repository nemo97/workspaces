var Rx = require("rxjs");

var source = Rx.Observable.of(10);

source.expand(function(x){
    return Rx.Observable.of(x+5);
})
.take(5)
.subscribe(
    x => console.log("Successful "+x),
    err => new Error(err),
    () => console.log("Completed ")
);


var subject$$ = new Rx.BehaviorSubject("2");
var i=0;
subject$$.subscribe(
    x => {
        console.log(x);
        if(i < 10){
            i++;
            subject$$.next(x+2);
        }else{
            subject$$.complete();
        }
    },
    err => new Error(err),
    () => console.log("Completed ")
);

// setInterval(function(){
//     if(i < 10){
//         i++;
//         subject$$.next(4*Math.random(100));
//     }else{
//         subject$$.complete();
//     }
    
// },2000);