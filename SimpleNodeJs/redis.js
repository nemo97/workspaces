var redis = require('redis');
var Rx = require("rxjs");
var client = redis.createClient(); //creates a new client

// client.on('connect', function() {
//     console.log('connected');

//     client.set('foo','test',function(err,reply){
//         console.log("....reply.."+reply);
//     });
// });

var source = Rx.Observable.fromEvent(client,'connect');

source
.map( x=> {
    return client.set('foo','test1');
})
.subscribe(
    x => {
        console.log('connected '+x);
        process.exit(0);
    }
);


