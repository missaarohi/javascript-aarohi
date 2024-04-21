//constructor se humesha singelton banega or literals se singelton nhi bnta h
//Object.create se singelton bnta h

//object literals
const mysym=Symbol("key1")

const JSUser={              //ye bn gaya object
    "full name": "Aarohi Srivastava",
    name: "Aarohi",
    [mysym]:"mykey1",
    age: 18,
    location: "Kanpur",
    email: "mynameisaarohi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
} 

// console.log(JSUser["email"]);
// console.log(JSUser["full name"]);
// console.log(JSUser[mysym]);

JSUser.email="aarohichatgpt@gmail.com"
// Object.freeze(JSUser)
// console.log(JSUser);



JSUser.greeting=function(){
    console.log("Hello JS User");
}
JSUser.greetingtwo=function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JSUser.greeting());
console.log(JSUser.greetingtwo());