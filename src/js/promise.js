
let p1 = new Promise((resolve, reject) => resolve("1").then(console.log("1")));

console.log("pierwszy");


console.log(1-[NaN])
console.log(1-[{}])
console.log(1-[undefined])
console.log(1-['1'])
console.log(1-[])
console.log(1-['n'])
console.log(1-[1])


let x = [];
let y=Array();
console.log(x.prototype == Array.prototype);

console.log(x.prototype == y.prototype)
