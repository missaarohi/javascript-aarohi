//primitive

//7 types: string, number,boolean,null,undefined,symbol(for making any value unique),BigInt
//it is dynamically type programming language

const score=100
const scoreValue=100.3


const isLoggedIn= false
const temp=null
let userEmail;

const id=Symbol('123')
const Anotherid=Symbol('123')

console.log(id=== Anotherid);


const bigNumber= 232473283612313433432928928n
//if we apply n to any number then it becomes bigInt
//if we are passing the value same then also it is unique so it will give the output false

//reference type(Non Primitive)

//arrays,objects,Functions

const hero= ["shaktiman", "naagraj", "doga"];
let myObj = {
    name:"Aarohi",
    age: 20,
}

const myFunction=function(){
    console.log("Hello World!");
}

console.log(typeof scoreValue);



//************************memory*******************

//two types of memory 
//stack(primitive) and heap(non primitive)

let myInstaId="missProton"

let anothermyID=myInstaId

anothermyID="Aarohi"

console.log(anothermyID);

let userone={
    email:"aarohi123@gmail.com",
    upi:"myname",
}

let usertwo=userone
usertwo.email="123r@gmail.com"
console.log(userone.email);
console.log(usertwo.email);

//stack ke andar duplicate krte h lekin heap k andar reference dete h