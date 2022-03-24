const assert = require('assert');
const exp = require('constants');
const { isTypedArray } = require('util/types');
const TaskManager = require('../js/taskmanager.js');

describe('TaskManager', () => {
    describe('constructor', () => {
        it('creates a TaskManager object with the .tasks property as an empty array', () => {
            // Setup
            const expectedResult = [];

            // Exercise
            const _taskManager = new TaskManager;
            const result = _taskManager.tasks;

            // Verify
            assert.deepEqual(result, expectedResult);

        })
        it('creates a TaskManager object with the .currentId property equal to the argument passed (by default, 0)', () => {
            // Setup
            const expectedResult = 0;

            // Exercise
            const _taskManager = new TaskManager;
            const result = _taskManager.currentId;

            // Verify
            assert.equal(result, expectedResult);
        })
    })
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