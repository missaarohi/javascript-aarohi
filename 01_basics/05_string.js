const name="Aarohi"
const repoCount="55"
//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gamename= new String("Aarohi-hc-com")


console.log(gamename[0]);
console.log(gamename.__proto__); //used to know the value


console.log(gamename.length);

console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf("i"));


const newString= gamename.substring(0, 4)
console.log(newString);


const another=gamename.slice(-8, 5)
console.log(another);


const newstr1="    Aar   ohi       "

console.log(newstr1);
console.log(newstr1.trim());


const url="https://aarohi.com/aarohi%20srivastava"

console.log(url.replace("%20","-"));

console.log(url.includes("aaro"));

console.log(gamename.split('-'));