Function that should add a TODO HTML block to the DOM using
 * the appropriate data from the form when the form is submitted
 * @param event form submit event
 */
function addToDo(event) {
  event.preventDefault();

  /**
   * Put your code below to create a new TODO HTML block,
   * get the appropriate data from the form, and add it to the DOM.
   */
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  
  let todoBlock = document.createElement('div');
  todoBlock.classList.add('todo');
  let descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;

  let removeButton = document.createElement('button');
  removeButton.textContent = 'X';
  removeButton.classList.add('remove-button');
  removeButton.addEventListener('click', removeToDo);

 
  todoBlock.appendChild(titleElement);
  todoBlock.appendChild(descriptionElement);
  todoBlock.appendChild(removeButton);


  let todoContainer = document.getElementById('todo-container');
  todoContainer.appendChild(todoBlock);


  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
}


/**
 * Method to add a class that marks the TODO as
 * completed, ie greyed out when TODO block is clicked. If
 * block is already completed (ie clicked before), then it
 * should remove the class.
 * @param event the onclick event
 */
function toggleToDo(event) {
  let targetElement = getRootElement(event.currentTarget);

  //Your code here
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

  //Your code here
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
    targetElement = targetElement.parent
      ? targetElement.parent
      : targetElement.parentElement;
  }
  return targetElement;
}
var submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', addToDo);
