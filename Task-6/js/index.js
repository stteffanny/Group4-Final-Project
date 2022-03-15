const _taskManager = new TaskManager;

function validFormFieldInput(event) {
    event.preventDefault();

    alertElement = document.querySelector('#bootstrap-alert');
    alertElement.hidden = true;
  
    const taskElement = document.querySelector('#task');
    const taskValue = taskElement.value;
    //console.log("Task Name: "+taskValue);
    
    const assigneeElement = document.querySelector('#assignee');
    const assigneeValue = assigneeElement.value;
    //console.log("Assigned To: "+assigneeValue);
  
    const dueElement = document.querySelector('#due');
    const dueValue = dueElement.value;
    //console.log("Due Date: "+dueValue);
  
    const descriptionElement = document.querySelector('#description');
    const descriptionValue = descriptionElement.value;
    //console.log("Task Description: "+descriptionValue);
  
    if(taskValue === '' && assigneeValue === '' && dueValue === '' && descriptionValue === '') {
      alertElement.hidden = false;
      alertElement.innerHTML = "Don't forget to name your task, assign it to someone, include a due date, and enter a description!";
      return false;
    } else if(taskValue === '' && dueValue === '' && descriptionValue === '') {
      alertElement.hidden = false;
      alertElement.innerHTML = "Don't forget to name your task, include a due date, and enter a description!";
      return false;
    } else if(taskValue === '' && assigneeValue === '' && descriptionValue === '') {
      alertElement.hidden = false;
      alertElement.innerHTML = "Don't forget to name your task, assign it to someone, and enter a description!";
    } else if(taskValue === '' && assigneeValue === '' && dueValue === '') {
      alertElement.hidden = false;
      alertElement.innerHTML = "Don't forget to name your task, assign it to someone, and include a due date!";
      return false;
    } else if(assigneeValue === '' && dueValue === '' && descriptionValue === '') {
      alertElement.hidden = false;
      alertElement.innerHTML = "Don't forget to assign your task to someone, include a due date, and enter a description!";
      return false;
    } else if(taskValue === '' && assigneeValue === '') {
      alertElement.hidden = false;
      alertElement.innerHTML = "Don't forget to name your task and assign it to someone!";
      return false;
    } else if(taskValue === '' && dueValue === '') {
      alertElement.hidden = false;
      alertElement.innerHTML = "Don't forget to name your task and include a due date!";
      return false;
    } else if(taskValue === '' && descriptionValue === '') {
      alertElement.hidden = false;
      alertElement.innerHTML = "Don't forget to name your task and enter a description!";
      return false;
    } else if(assigneeValue === '' && dueValue === '') {
      alertElement.hidden = false;
      alertElement.innerHTML = "Don't forget to assign your task to someone and include a due date!";
      return false;
    } else if(assigneeValue === '' && descriptionValue === '') {
      alertElement.hidden = false;
      alertElement.innerHTML = "Don't forget to assign your task to someone and enter a description!";
      return false;
    } else if(dueValue === '' && descriptionValue === '') {
      alertElement.hidden = false;
      alertElement.innerHTML = "Don't forget to include a due date and enter a description!";
      return false;
    } else if(taskValue === '') {
      alertElement.hidden = false;
      alertElement.innerHTML = "Don't forget to name your task!";
      return false;
    } else if(assigneeValue === '') {
      alertElement.hidden = false;
      alertElement.innerHTML = "Don't forget to assign your task to someone!";
      return false;
    } else if(dueValue === '') {
      alertElement.hidden = false;
      alertElement.innerHTML = "Don't forget to include a due date!";
      return false;
    } else if(descriptionValue === '') {
      alertElement.hidden = false;
      alertElement.innerHTML = "Don't forget to enter a description!";
      return false;
    }
    _taskManager.addTask(taskValue, descriptionValue, assigneeValue, dueValue);
    // console.log(_taskManager.tasks);
    _taskManager.render();    
  }
  
  

  submitElement = document.querySelector('#submit-form');
  submitElement.addEventListener("click", validFormFieldInput);

  
  let renderList = document.querySelector('#render-task-list');
  renderList.addEventListener("click", (event) => {
    // console.log(event.target.classList);
    if(event.target.classList.contains('done-button')) {
      let parentTask = event.target.parentElement.parentElement.parentElement;
      // console.log(parentTask);
      let taskId = Number(parentTask.getAttribute('data-task-id'));
      // console.log(taskId);
      let task = _taskManager.getTaskById(taskId);
      task.status = 'DONE';
      _taskManager.render();
    }
  })
