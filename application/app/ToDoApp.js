"use client"
import { useState } from 'react'
import Task from './Task'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

export default function ToDoApp() {
    
    const [ tasks, setTasks ] = useState(tasksInit);
    const tasksTree = tasks.map(v => <Task key={v.task + v.isCompleted} task={v} />)

    return (
        <Container>
            <Form>
                <Form.Group controlId="task_to_perform">
                    <Form.Label>Task:</Form.Label>
                    <Form.Control placeholder="Enter the task.."/>
                </Form.Group>
                <Button variant='primary' type="submit">Add</Button>
            </Form>
            <Container>
            {tasksTree}
            </Container>
        </Container>
    )
}


const tasksInit = [
    {text: 'Water the flowers', isCompleted: 0},
    {text: 'Cook the dinner', isCompleted: 1},
    {text: 'Do the dishes', isCompleted: 0},
]