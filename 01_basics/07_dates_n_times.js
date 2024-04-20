let myDate= new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);


// const myNewDate= new Date(2023, 0, 24)
// const myNewDate= new Date(2023, 0, 24,3,5)
// const myNewDate= new Date("2023-01-14")

const myNewDate= new Date("01-14-2024")
// console.log(myNewDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myNewDate.getTime());

console.log(Math.floor(Date.now()/1000));



let neewDate=new Date()
console.log(neewDate);
console.log(neewDate.getFullYear());
console.log(neewDate.getHours());
console.log(neewDate.getDate());
console.log(neewDate.getDay());
console.log(neewDate.getUTCFullYear());
console.log(neewDate.getMonth()+1);


console.log(neewDate.toLocaleString('default',{
    weekday: "long",
    dayPeriod: "long",
    era: "long"
}));