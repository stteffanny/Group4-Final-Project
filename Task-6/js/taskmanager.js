//For this task, we'll be creating a class to manage the tasks, 
//adding a method to the class to keep track of tasks in our 
//application, and connecting up the New Task form to create tasks.

createTaskHtml = (name, description, assignee, dueDate, status) => {
    const html = `
    <li class="list-group-item">
    <div class="task card">
        <div class="card-header">
            <div class="btn text-muted float-left">
                ${dueDate}
            </div>
            <div class="btn float-right" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Status
            </div>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item active" href="#">${status}</a>
                <a class="dropdown-item" href="#">In Progress</a>
                <a class="dropdown-item" href="#">Review</a>
                <a class="dropdown-item" href="#">Done</a>
            </div>
        </div>

    <!--Begin Card Body-->
    <div class="card-body">
        <h4 class="card-title">${name}</h4>
        <p class="card-text">${description}</p>
        <a href="#" class="badge badge-warning">
            ${assignee}</a>
    </div>
</li>`;
return html;
}

class TaskManager {    
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    

    addTask(name, description, assignee, dueDate) {                      
            const task = {
                name: name,
                description: description,
                due: dueDate,
                assignee: assignee,
                status: 'TODO',
                id: this.currentId++
            }
            this.tasks.push(task);
            console.log(this.tasks);
    }

    render() {
        let tasksHtmlList = [];
        for(let i = 0; i < this.tasks.length; i++) {
            let currentTask = this.tasks[i];
            let date = new Date(currentTask.due);
            let formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            let taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignee, formattedDate, currentTask.status);
            tasksHtmlList.push(taskHtml);
        };
        let tasksHtml = tasksHtmlList.join('\n');
        document.getElementById('render-task-list').innerHTML = tasksHtml;
    };
};