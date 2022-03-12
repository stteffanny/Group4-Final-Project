//For this task, we'll be creating a class to manage the tasks, 
//adding a method to the class to keep track of tasks in our 
//application, and connecting up the New Task form to create tasks.

class TaskManager {
    
    constructor(currentId=0) {
        this.tasks = [];
        this.currentId = currentId;
    }
       addTask(taskValue, descriptionValue, assigneeValue, dueValue) {
                      
            const task = {
                name: taskValue,
                description: descriptionValue,
                due: dueValue,
                assignee: assigneeValue,
                status: 'TODO',
                id: this.currentId++
            }

            this.tasks.push(task)
            console.log(this.tasks)
         }
    };
