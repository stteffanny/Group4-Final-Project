//For this task, we'll be creating a class to manage the tasks, 
//adding a method to the class to keep track of tasks in our 
//application, and connecting up the New Task form to create tasks.

createTaskHtml = (name, description, assignee, dueDate, status, id) => {
    const html = `
    <li class="list-group-item" data-task-id="${id}">
    <div class="task card">
        <div class="card-header">
            <div class="float-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
  <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
</svg> ${dueDate}
            </div>
            <div class="float-right">
                Status: <span class="badge badge-primary">${status}</span>
            </div>
        </div>

    <!--Begin Card Body-->
    <div class="card-body">
        <h4 class="card-title">${name}</h4>
        <p class="card-text">${description}</p>
        <a href="#" class="badge badge-warning">
            ${assignee}</a>
        <div class = "btn-group float-right">
        <button type="button" class="small btn btn-outline-success done-button ">Mark As Done</button>
        <button type="button" class="btn btn-outline-danger delete-button float-right">Delete</button>
        </div>
    </div>
</li>`;
    return html;
}

class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }
    addTask(taskValue, description, assignee, dueDate) {
        const task = {
            name: taskValue,
            description: description,
            due: dueDate,
            assignee: assignee,
            status: 'TODO',
            id: this.currentId++
        }
        this.tasks.push(task);
        //console.log(this.tasks);
    }

    deleteTask(taskId) {
        // console.log("The deleteTask method ran")
        let newTasks = [];
        for(let i = 0; i < this.tasks.length; i++) {
            let task = this.tasks[i];
            if(task.id !== taskId) {
                newTasks.push(task);
            };
        };
        this.tasks = newTasks;
    };

    render() {
        let tasksHtmlList = [];
        for (let i = 0; i < this.tasks.length; i++) {
            let currentTask = this.tasks[i];
            let date = new Date(currentTask.due);
            let formattedDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
            let taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignee, formattedDate, currentTask.status, currentTask.id);
            tasksHtmlList.push(taskHtml);
        };
        let tasksHtml = tasksHtmlList.join('\n');
        document.querySelector('#render-task-list').innerHTML = tasksHtml;
    };

    getTaskById(taskId) {
        let foundTask;
        for(let i = 0; i < this.tasks.length; i++) {
            let task = this.tasks[i];
            if(taskId === task.id) {
                foundTask = task;
            };
        };
        return foundTask;
    };

    save() {
        let tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem("tasks", tasksJson);
        let currentId = JSON.stringify(this.currentId);
        localStorage.setItem("currentId", currentId);
      };
    
    load() {
        if(localStorage.getItem('tasks')) {
            let tasksJson = localStorage.getItem("tasks");
            this.tasks = JSON.parse(tasksJson)};
        if(localStorage.getItem('currentId')) {
            let currentId = localStorage.getItem("currentId");
            this.currentId = parseInt(currentId);
        };
      };
};

module.exports = TaskManager;