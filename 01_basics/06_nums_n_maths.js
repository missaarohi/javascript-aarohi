const score=400
//console.log(score);

const balance=new Number(100)
//console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const other= 123.8999
// console.log(other.toPrecision(5));


const nom=100000000
//console.log(nom.toLocaleString('en-IN'));

//+++++++++++++++++++++++maths++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4)); //change -ve value into positive

console.log(Math.round(4.6));//approx value de deta h

console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.min(4.98,4.56,4.02));
console.log(Math.max(4.98,4.56,4.02));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)) + min);