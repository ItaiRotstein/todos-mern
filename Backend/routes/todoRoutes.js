const express = require('express');
const router = express.Router();
const {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todoController')

router.route('/').get(getTodos).post(addTodo)
router.route('/:id').put(updateTodo).delete(deleteTodo)

// router.get("/", getTodos);
// router.post("/", addTodo);
// router.put("/:id", updateTodo);
// router.delete("/:id", deleteTodo);

module.exports = router