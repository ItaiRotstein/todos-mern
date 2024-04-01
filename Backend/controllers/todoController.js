
const asyncHandler = require("express-async-handler")
// @desc    Get todos
// @route   GET /api/todos
// @access  Private
const getTodos = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get todos"})
})

// @desc    add todos
// @route   POST /api/todos
// @access  Private
const addTodo = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    }
    res.status(200).json({message: "Add todo"})
})

// @desc    update todos
// @route   PUT /api/todos/:id
// @access  Private
const updateTodo = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update todo ${req.params.id}`})
})

// @desc    Delete todos
// @route   DELETE /api/todos/:id
// @access  Private
const deleteTodo = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete todo ${req.params.id}`})
})

module.exports = {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo,
}