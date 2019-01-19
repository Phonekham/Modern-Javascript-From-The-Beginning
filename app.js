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
const name = "Phone";
const  job = "Web Developer";
const age = 23;
const city = "VT";
let html;

//Without template strings(ES5)
html = "<ul><li>name: " + name + "</li><li>age: " + age + "</li><li>job: " + job + "</li><li>city: " + city +"</li></ul>";
//With template string(ES6)
html = `
<ul>
  <li>Name:${name}</li>
  <li>Age:${age}</li>
  <li>Job:${job}</li>
  <li>City:${city}</li>
  <li>${age > 30 ? 'Over 30' : 'under 30'}</li>
</ul>
`

document.body.innerHTML = html;