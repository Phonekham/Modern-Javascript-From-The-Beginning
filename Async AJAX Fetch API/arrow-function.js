const sayHello = () => {
  console.log('hello');
}
sayHello();

const users = ['a','b','c'];
// const nameLengths = users.map(function(name){
//   return name.length;
// });
// const nameLengths = users.map((name) => {
//   return name.length;
// });
// Shortest
const nameLengths = users.map(name => name.length);
console.log(nameLengths);