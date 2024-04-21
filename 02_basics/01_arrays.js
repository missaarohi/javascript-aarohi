//arrays

const myArray=[1,2,3,4]
const myHeroes=["shaktiman", "nagraj", "batman"]
const myArray2=new Array(1,2,3,4,5)
console.log(myArray[0]);
console.log(myHeroes[2]);

//Array methods

myArray.push(5,6,3)//ye humesha last m hi push hoga

myArray.pop()//isme jo last value insert karayenge vhi pop hoga bss koi or nhi

myArray.unshift(0)//humesha starting m hi add hoga poori array shift krke

myArray.shift()//ye pop ki tarah kaam karega bss ye sirf starting ki value remove karega

console.log(myArray);
console.log(myArray.includes(9));
console.log(myArray.indexOf(9));//kyunki value h hi nhi koi

const newArray=myArray.join()
console.log(typeof newArray);//newArray ki value same aayegi pr type change ho jayega object se string m

//++++++++++++slice or splice method+++++++++++++++++

console.log("A ", myArray);
const myn1=myArray.slice(1,3)
console.log(myn1);

console.log("B ",myArray);
const myn2=myArray.splice(1,3)
console.log("C ",myArray);
console.log(myn2);

//splice me jo array rehta h vo usse pehle nikal gaya h to original wala hi print ho jaeyga
