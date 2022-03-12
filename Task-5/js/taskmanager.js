//For this task, we'll be creating a class to manage the tasks, 
//adding a method to the class to keep track of tasks in our 
//application, and connecting up the New Task form to create tasks.

class TaskManager {
    constructor(currentId,tasks) {
        tasks = [];
        currentId = 0;
        
        this.tasks = tasks;
        this.currentId = currentId;
        this.addTask = function (taskValue, descriptionValue, assigneeValue, dueValue, status) {
            this.currentId++;
            this.status = "TODO"
            this.tasks.push(taskValue,descriptionValue,assigneeValue,dueValue,status,currentId)
         };
    }
};
test =  new TaskManager().addTask('taskname','description','Pete', 'March', 'TODO')
console.log(test)