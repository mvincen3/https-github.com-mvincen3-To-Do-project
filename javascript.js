/**
 * Function that should add a TODO HTML block to the DOM using
 * the appropriate data from the form when the form is submitted
 * @param event form submit event
 */
document.addEventListener ('DOMContentLoaded', function() {
function addToDo(event) {
  event.preventDefault();

  /**
   * Put your code below to create a new TODO HTML block,
   * get the appropriate data from the form, and add it to the DOM.
   */
  const todoBlock = document.createElement('div');
  todoBlock.classList.add('todo');
  
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  const todoTitle = document.createElement('h2');
  todoTitle.textContent = title;

  const todoDescription = document.createElement('p');
  todoDescription.textContent = description;

  const todoButtons = document.createElement('div');
  todoButtons.classList.add('buttons');

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.addEventListener('click', toggleToDo);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', removeToDo);

  todoButtons.appendChild(completeButton);
  todoButtons.appendChild(removeButton);

  todoBlock.appendChild(todoTitle);
  todoBlock.appendChild(todoDescription);
  todoBlock.appendChild(todoButtons);

  const todoList = document.getElementById('todo-list');
  todoList.appendChild(todoBlock);


  event.target.reset();
}

/**
 * Method to add a class that marks the TODO as
 * completed, i.e., greyed out when the TODO block is clicked.
 * If the block is already completed (i.e., clicked before), then it
 * should remove the class.
 * @param event the onclick event
 */
function toggleToDo(event) {
  let targetElement = getRootElement(event.currentTarget);

  targetElement.classList.toggle('completed');
}

/**
 * Function to remove a TODO block from the HTML when the 'X' button is clicked
 * @param event the onclick event
 */
function removeToDo(event) {
  event.preventDefault();
  event.stopPropagation();
  let todoElement = getRootElement(event.currentTarget);

  todoElement.remove();
}

/**
 * Function that gets the main div of a TODO block, denoted by the 'todo' class
 * Not recommended to change this method.
 * @param element the element to start searching from
 * @returns TODO block element or null
 */
function getRootElement(element) {
  let targetElement = element;
  while (targetElement && !targetElement.classList.contains("todo")) {
    targetElement = targetElement.parentElement;
  }
  return targetElement;
}


const form = document.getElementById('todo-form');
form.addEventListener('submit', addToDo);
 });
