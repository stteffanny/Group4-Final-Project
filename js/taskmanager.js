//For this task, we'll be creating a class to manage the tasks, 
//adding a method to the class to keep track of tasks in our 
//application, and connecting up the New Task form to create tasks.

createTaskHtml = (name, description, assignee, dueDate, status, id) => {
    const html = `
    <li class="list-group-item" data-task-id="${id}">
    <div class="task card">
        <div class="card-header">
            <div class="float-left">
                Due : ${dueDate}
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
        <button type="button" class="btn btn-success done-button float-right">Mark As Done</button>
        <button type="button" class="btn btn-danger delete-button float-right">Delete</button>
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
            let formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
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