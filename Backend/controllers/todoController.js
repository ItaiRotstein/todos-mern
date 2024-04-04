const Todo = require("../models/todoModel");
const asyncHandler = require("express-async-handler");
// @desc    Get todos
// @route   GET /api/todos
// @access  Private
const getTodos = asyncHandler(async (req, res) => {
    const todos = await Todo.find()
    res.status(200).json(todos)
});

// @desc    add todos
// @route   POST /api/todos
// @access  Private
const addTodo = asyncHandler(async (req, res) => {
    if (!req.body.title) {
        res.status(400)
        throw new Error("Please add a text field")
    };

    const todo = await Todo.create({
        title: req.body.title,
        id: req.body.id,
        completed: req.body.completed,
    });

    res.status(200).json(todo);
})

// @desc    update todos
// @route   PUT /api/todos/:id
// @access  Private
const updateTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
        res.status(400);
        throw new Error('Todo not found');
    }

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json({ updatedTodo });
})

// @desc    Delete todos
// @route   DELETE /api/todos/:id
// @access  Private
const deleteTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
        res.status(400);
        throw new Error('Todo not ofund');
    };

    await todo.deleteOne();

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo,
};