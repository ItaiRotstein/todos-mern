import { useState } from 'react';

import { utilService } from '../services/util.service'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { IoAddCircleSharp } from "react-icons/io5";

const AddTodo = ({ addTodo }) => {
    const [todoTitle, setTodoTitle] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault()
        handleClose()
        if (!todoTitle) return
        setTodoTitle("")
        const newTodo = {
            title: todoTitle,
            id: utilService.makeId(),
            completed: false,
        }
        addTodo(newTodo)
    }

    return (
        <>
            {/* <Button variant="primary">
                Add Todo
            </Button> */}
            <div className='add-task-menu menu-item' onClick={handleShow} >
                <IoAddCircleSharp className="add-button" />
                <span className={"add-task-text"}>Add Task</span>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Todo</Form.Label>
                            <Form.Control
                                type="text"
                                value={todoTitle}
                                placeholder='type...'
                                autoFocus
                                onChange={(e) => setTodoTitle(e.target.value)}
                            />
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
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddTodo;