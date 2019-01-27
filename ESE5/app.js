// Iterator example
function nameIterator(names){
  let nextIndex = 0;
  return {
    next: function(){
      return nextIndex < names.length ?
      {value:names[nextIndex++], done:false}:
      {done:true}
    }
  }
}

// create array of names
// const namsesArr = ['Jack', 'Jill', 'John'];
// // Init iterator and pass in the namses array
// const names = nameIterator(namsesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// // Generator example
// function* sayNames(){
//   yield 'Jack';
//   yield 'Jill';
//   yield 'John';
// }
// const name = sayNames();
// console.log(name.next().value);

// ID creator
function* createIds(){
  let index = 1;

  while(true){
    yield index++;
  }
}
const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// Destructuring assignment
// let a,b;
// [a,b] = [100,200];

// // rest pattern
// [a,b,c,...rest] = [100,200,300,400,500];
// ({a,b} = {a:100,b:200,c:300,d:400,e:500})
// console.log(a,b,c);

// Object Destructuring

const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function () {
    console.log('Hello');
  }
}

// Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

// New ES6 Destructuring
const {
  name,
  age,
  city,
  sayHello
} = person;

console.log(name, age, city);

sayHello();

//Map = key-value pairs - can user any type as a key or value

const map1 = new Map();

// set keys
const key1 = 'some string',
      key2 = {},
      key3 = function(){};

//set map values by key
map1.set(key1, 'Value of key 1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

//count values
console.log(map1.size);

//Iterate maps

// loop using for... of to get keys of values
for (let [key, value] of map1) {
  console.log(`${key} = ${value}`);
} 

// Iterate key only
for (let value of map1.values()) {
  console.log(value);
}