const assert = require('assert');
const { isTypedArray } = require('util/types');
const TaskManager = require('../js/taskmanager.js');

describe('TaskManager', () => {
    // beforeEach(() => {
    //     const _taskManager = new TaskManager;
    //     console.log(Object.getOwnPropertyNames(_taskManager));
    // })
    describe('.addTask', () => {
        it('adds the task to the TaskManager.tasks array', () => {
        // Setup
        // const input = {
        //     name: taskValue,
        //     description: description,
        //     due: dueDate,
        //     assignee: assignee,
        //     status: 'TODO',
        //     id: _taskManager.currentId++
        // };
        const _taskManager = new TaskManager;
        const expectedResult = {name: 'taskValue', description: 'description', due: 'dueDate', assignee: 'assignee', status: 'TODO', id: 0};

        // Exercise
        _taskManager.addTask('taskValue', 'description', 'assignee', 'dueDate');
        const result = _taskManager.tasks[0];

        // Verify
        assert.deepEqual(result, expectedResult);
        })
    })
    describe('.deleteTask', () => {

    })
    describe('.getTaskById', () => {

    })
});