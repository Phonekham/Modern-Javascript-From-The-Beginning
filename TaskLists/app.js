//Define UI vars
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//load all event listeners
loadEventListeners();

function loadEventListeners(){
  //Add task event
  form.addEventListener('submit',addTask);
}

//Add task
function addTask(e){
  if (taskInput.value === '') {
    alert('add a task');
  }
  //create li element
  const li =  document.createElement('li');
  //add class
  li.className = 'collection-item';
  //create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //create new link element
  const link = document.createElement('a');
  //add class
  link.className = 'delete-item secondary-content';
  //add icon html
  link.innerHTML = '<li class="fa fa-remove"></li>';
  //append the link to li
  li.appendChild(link);

  //append li to ul
  tasklist.appendChild(li);

  //clear input
  taskInput.value = '';
  

  e.preventDefault();
}