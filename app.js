// let val;
// val = String(5+5);
// val = String(false);
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// const num1 = 100;
// const num2 = 50;
// let val;

// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 % num2;
// val = num1 / num2;

// //math object 
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.4);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8.2);
// val = Math.min(-3,5,8,3);
// val = Math.max(-3, 5, 8, 3);
// console.log(val);

//concatenation
// const firstname = "Phonekham";
// const lastname = "Keomany";
// val = firstname + ' ' +  lastname;


// //append
//  val = "Phone ";
//  val += "Kham";

//  //escape
//  val = 'That\'s awesome, I can\'t wait';

//   //lenght
//   val = firstname.length;
//   //concat
//   firstname.concat(' ',lastname);
//   //change case
//   val= firstname.toLowerCase;
//   val = firstname.toUpperCase;

//    val = firstname[2]; 
//   //indexof
//   val = firstname.indexOf('1');
//   val = firstname.lastIndexOf('1');

//   //charAt
//   val = firstname.charAt('2');
//   //get last char
//   val = firstname.charAt(firstname.length - 1);
//   //substring
//   val = firstname.substring(0,4);
//   //slice
//   val = firstname.slice(0,4);
//   val = firstname.slice(-3);
//   //split

// console.log(val);
// const name = "Phone";
// const  job = "Web Developer";
// const age = 23;
// const city = "VT";
// let html;

// //Without template strings(ES5)
// html = "<ul><li>name: " + name + "</li><li>age: " + age + "</li><li>job: " + job + "</li><li>city: " + city +"</li></ul>";
// //With template string(ES6)
// html = `
// <ul>
//   <li>Name:${name}</li>
//   <li>Age:${age}</li>
//   <li>Job:${job}</li>
//   <li>City:${city}</li>
//   <li>${age > 30 ? 'Over 30' : 'under 30'}</li>
// </ul>
// `

// document.body.innerHTML = html;

// //array
// const numbers = [34,44,66,3,54];
// const numbers2 = new Array(23,89,9,34,23);
// const fruit = ['Apple','Banna','orange'];
// const mixed = [22,"hi",true,undefined,null,{a:1,b:2},new Date()];
// let val;
// //get array lenght
// val = numbers.length;
// //check if array
// val = Array.isArray(numbers);
// val = numbers[3];
// //insert into array
// numbers2[2] = 100
// //mutateing array
// numbers2.push(22); //add to last
// numbers2.unshift(120); //add to first
// //take off from end
// numbers2.pop();
// //take off from front
// numbers2.shift();
// //splice
// numbers2.slice(1,3);

// //concatenate array
// val = numbers.concat(numbers2);
// //sorting array
// val = fruit.sort();
// val = numbers.sort();

// //use the compare function
// val = numbers.sort(function(x,y){
// return x-y;
// });
// //reverse sort
// val = numbers.sort(function (x, y) {
//   return y-x;
// });

// //find
// function under50(num){
//   return num < 50;
// }
// val = numbers.find(under50);

// console.log(numbers2);
// console.log(val);

// const person = {
//   firstname:'Phonekham',
//   lastname:'Keomany',
//   age:23,
//   email:'phone@gmail.com',
//   hobbies:['music','coding','sports'],
//   address:{
//     city:'VT',
//     village:'khamhoung'
//   },
//   GetBirthYear:function(){
//     return 2018 - this.age;
//   }
// }
// let val;
// val = person;
// //get specific value
// val = person.firstname;
// val = person['lastname'];
// val = person.age;
// val = person.hobbies[1];
// val = person.address.city;
// val = person.address['village'];
// val = person.GetBirthYear();
// console.log(val);
// const people = [
//   {name:'Phone',age:23},
//   {name:'seng',age:22}
// ];
// for(let i = 0; i < people.length;i++){
//   console.log(people[i].name);
// }

// let val;
// const today = new Date();
// let birthday = new Date('6/5/2017');
// val = today.getDay();
// val = today.getMonth();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getMilliseconds();
// val = today.getTime();
// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setHours(3);
// console.log(birthday);

// const color = 'bluee';
// switch (color) {
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   default:
//     console.log('color is not blue & red');
//     break;
// } 
// switch (new Date().getDay()) {
//   case 0:
//     day = 'sunday'
//     break;
//   case 1:
//     day = 'monday'
//     break;
//   case 2:
//     day = 'tuesday'
//     break;
//   case 3:
//     day = 'wednesday'
//     break;
//   case 4:
//     day = 'thursday'
//     break;
//   case 5:
//     day = 'friday'
//     break;
//   case 6:
//     day = 'saturday'
//     break;
// }
// console.log(`Today is ${day}`);

// (function(name){
//   console.log('Hello ' + name);
// })('Phone');
// //property method
// const todo = {
//   add:function(){
//     console.log('add todo');
//   },
//   edit:function(id){
//     console.log(`Edit todo ${id}`);
//   }
// }
// todo.delete = function(){
//   console.log('delete todo');
// }
// todo.add();
// todo.edit(22);
// todo.delete();

// //for loop
// for (let i = 0; i <= 10; i++) {
  
//   if (i === 2) {
//    console.log('2 is my fav'); 
//    continue;
//   }
//   if (i === 5) {
//     break;
//   }
//   console.log('number is ' + i);
// }
// //while loop
// // let i = 0;
// // while (i < 10) {
// //   console.log('number is ' + i);
// //   i++;
// // }
// //do while
// // let i = 0;
// // do{
// //   console.log('number is ' + i);
// //   i++;
// // }
// // while(i < 10);
//  //loop through array
// const cars = ['ford','honda','toyota','chevrolet'];
// // for (let i = 0; i < cars.length; i++) {
// //   console.log(cars[i]);
// // }
// //foreach
// cars.forEach(function(car){
//   console.log(car);
// });


// //map
// const users = [
//   {id:1,name:'phone'},
//   { id: 2, name: 'ha' },
//   { id: 3, name: 'he' }
// ];
// const ids = users.map(function(user){
// return user.id;
// });
// console.log(ids);

// //for in loop
// const user = {
//   firstname:"phone",
//   lastname:"keomany",
//   age:23
// }
// for (let x in user) {
//  console.log(`${x}: ${user[x]}`)
// }

//windows methods / objects/properties
//prompt 
// const input  = prompt();
// alert(input);

//confirm
// if (confirm('are you sure')) {
//   console.log('yes');
// }else{
//   console.log('no');
// }

let val;
val = window.outerHeight;
val = window.outerWidth;
val = window.innerWidth;

//scroll point
val = window.scrollY;
//val = window.scrollX;

//location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//history
window.history.go(-1);
val = window.history.length;
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.platform;
console.log(val);