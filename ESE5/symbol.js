// Create symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

// console.log(sym1);
// console.log(`Hello ${sym1.toString()}`);

// unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'prop1';
myObj[KEY2] = 'prop2';
myObj.key3 = 'pro3';
myObj.key4 = 'pro4';

console.log(myObj[KEY1]);

// symbol are not enumerable in for...in
for (let i in myObj){
  console.log(`${i}: ${myObj[i]}`);
}

// symbol are ignored by JSON.stringify
console.log(JSON.stringify({key:'prop'}));
