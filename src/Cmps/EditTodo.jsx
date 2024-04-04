import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function EditTodo({ show, handleClose, todo, updateTodo, deleteTodo }) {
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const [isChecked, setIsChecked] = useState(todo.completed);

  const handleSubmit = (e) => {
    handleClose()
    if (!todoTitle) return
    onUpdateTodo()
  }

  const handleDelete = () => {
    handleClose()
    deleteTodo(todo._id)
  }

  const onUpdateTodo = () => {
    const updatedTodo = { ...todo, title: todoTitle, completed: isChecked }
    updateTodo(updatedTodo)
  }

  if (!todo) return;

  return (
    <Modal show={show} onHide={handleClose} >
      <Modal.Header closeButton>
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Todo</Form.Label>
            <Form.Control
              type="text"
              value={todoTitle}
              autoFocus
              onChange={(e) => setTodoTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <input
              className="form-check-input me-2"
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <Form.Label>Completed</Form.Label>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditTodo;