function validFormFieldInput(event) {
  event.preventDefault();
  alertElement = document.getElementById('bootstrap-alert'
  );
  alertElement.hidden = true;

  const taskElement = document.getElementById('task');
  const taskValue = taskElement.value;
  console.log("Task Name: "+taskValue);
  if(taskValue === '') {
    alertElement.hidden = false;
    alertElement.innerHTML = "Don't forget to name your task!";
  }
  
  const assigneeElement = document.getElementById('assignee');
  const assigneeValue = assigneeElement.value;
  //console.log("Assigned To: "+assigneeValue);

  const dueElement = document.getElementById('due');
  const dueValue = dueElement.value;
  //console.log("Due Date: "+dueValue);

  const descriptionElement = document.getElementById('description');
  const descriptionValue = descriptionElement.value;
  //console.log("Task Description: "+descriptionValue);
}

submitElement = document.getElementById('submit-form');
submitElement.addEventListener("click", validFormFieldInput);