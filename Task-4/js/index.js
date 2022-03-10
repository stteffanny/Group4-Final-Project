function validFormFieldInput() {
  const taskElement = document.getElementById('task');
  const taskValue = taskElement.value;
  console.log("Task Name: "+taskValue);

  const assigneeElement = document.getElementById('assignee');
  const assigneeValue = assigneeElement.value;
  console.log("Assigned To: "+assigneeValue);

  const dueElement = document.getElementById('due');
  const dueValue = dueElement.value;
  console.log("Due Date: "+dueValue);

  const descriptionElement = document.getElementById('description');
  const descriptionValue = descriptionElement.value;
  console.log("Task Description: "+descriptionValue);
}

document.getElementById('submit-form').onclick = validFormFieldInput;