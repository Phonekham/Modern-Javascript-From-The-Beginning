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