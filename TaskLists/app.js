//Define UI vars
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//load all event listeners
loadEventListeners();

function loadEventListeners(){
  //DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  //Add task event
  form.addEventListener('submit',addTask);
  //remove task event
  tasklist.addEventListener('click',removeTask);
  //clear task event
  clearBtn.addEventListener('click', clearTasks);
  //filter task event
  filter.addEventListener('keyup',filterTasks);
  
}

//get task from local storage
function getTasks(){ 
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task){
     //create li element
     const li = document.createElement('li');
     //add class
     li.className = 'collection-item';
     //create text node and append to li
     li.appendChild(document.createTextNode(task));
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

  });
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

  //store in local storage
  storeTaskInLocalStorage(taskInput.value);
  //clear input
  taskInput.value = '';
  

  e.preventDefault();
}
//store task
function storeTaskInLocalStorage(task){
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//remove task
function removeTask(e){
  if (e.target.parentElement.classList.contains('delete-item')) {
   if (confirm('Are your sure?')) {
     e.target.parentElement.parentElement.remove();

     // Remove from local Storage
     removeTaskFromLocalStorage(e.target.parentElement.parentElement);
   }
  }
}

//remove from local storage
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task,index){
      if (taskItem.textContent === task) {
        tasks.splice(index,1);
      }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

//clear tasks
 function clearTasks(){
  // tasklist.innerHTML = '';

  //Faster
  while (tasklist.firstChild) {
    tasklist.removeChild(tasklist.firstChild);
  }

  //clear from local
  clearTasksFromLocalStorage();
  //Clear task from local stoage
  function clearTasksFromLocalStorage(){
    localStorage.clear();
  }

 }

 //filter task
 function filterTasks(e){
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    }else{
      task.style.display = 'none';
    }
  });
 }