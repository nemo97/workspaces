export class A {
    as:string;
    bn:number;
    
    constructor(as?:string,bn?:number){
        this.as =as;
        this.bn =bn;
    }

    msg()  {
        return "Hello from "+this.as+" with "+ this.bn;
    }
}

let a : A = new A();
a.as = "test";
a.bn = 30;


//let b : A = new A({ as:"btest",bn:20 });
let x : [string,number];
x=["hello",3];


enum Color{RED,GREEN,TEST};

let c : Color = Color.GREEN;

console.log(c+"color name "+Color[c]);

console.log("test mgs from object a "+ a.msg()+ " bfrom "+x) ;
