const assert = require('assert');
const { isTypedArray } = require('util/types');
const TaskManager = require('../js/taskmanager.js');

describe('TaskManager', () => {
    describe('.addTask', () => {
        it('adds the task to the TaskManager.tasks array', () => {
            // Setup
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
        it('deletes the task from the TaskManager.tasks array', () => {
            //Setup
            const _taskManager = new TaskManager;
            _taskManager.addTask('taskValue', 'description', 'assignee', 'dueDate');
            const expectedResult = undefined;

            // Exercise
            _taskManager.deleteTask(0);
            const result = _taskManager.tasks[0];

            // Verify
            assert.equal(result, expectedResult);
        })
    })
    describe('.getTaskById', () => {
        it('returns the task from the TaskManager.tasks array that corresponds to the index given', () => {
            // Setup
            const _taskManager = new TaskManager;
            _taskManager.addTask('taskValue', 'description', 'assignee', 'dueDate');
            const expectedResult = {name: 'taskValue', description: 'description', due: 'dueDate', assignee: 'assignee', status: 'TODO', id: 0};

            // Exercise
            const result = _taskManager.getTaskById(0);

            // Verify
            assert.deepEqual(result, expectedResult);
        })
    })
});