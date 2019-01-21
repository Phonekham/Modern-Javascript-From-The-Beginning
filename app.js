// DOM single selector
console.log(document.getElementById('task-title'));

//get things from element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const tasktitle = document.getElementById('task-title');
//change style
tasktitle.style.background ='#333';

//change content
tasktitle.textContent = 'Task list';
tasktitle.innerText = 'My task';
document.querySelector('li').style.color = 'red';

//DOM mutiple selectors
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'blue';
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
