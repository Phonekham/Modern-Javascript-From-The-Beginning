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