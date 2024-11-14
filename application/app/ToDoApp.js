"use client"
import { useState } from 'react'
import Task from './Task'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { generateStr } from './utils'

const idLen = 10;

export default function ToDoApp() {
    
    const [ tasks, setTasks ] = useState(tasksInit);
    const [ taskTextInput, setTaskTextInput ] = useState('');
    const onCheck = (id, status) => {
        const newTasks = tasks.map(t => {
            if (t.id === id) {
                return {...t, isCompleted: status}
            } 
            return t;
        })
        setTasks(newTasks)
    }

    const onRemove = (id) => {
        setTasks(tasks.filter(el => el.id !== id))
    }
   
    const tasksTree = tasks.map(v => <Task onCheck={onCheck} onRemove={onRemove} key={v.id} task={v} />)
    const onAddTask = (e) => {
        e.preventDefault();
        const id = generateStr(idLen);
        const newTasks = [...tasks, { id: id, text: taskTextInput, isCompleted: false }]
        setTasks(newTasks);
    }



    return (
        <Container>
            <Form onSubmit={onAddTask}>
                <Form.Group controlId="task_to_perform">
                    <Form.Label>Task:</Form.Label>
                    <Form.Control value={taskTextInput} onChange={(e) => setTaskTextInput(e.target.value)} placeholder="Enter the task.."/>
                </Form.Group>
                <Button variant='primary' disabled={!taskTextInput}  type="submit">Add</Button>
            </Form>
            <Container>
            {tasksTree}
            </Container>
        </Container>
    )
}


const tasksInit = [
    {id: 'f4d4565',  text: 'Water the flowers', isCompleted: false},
    {id: 'ffd567g', text: 'Cook the dinner', isCompleted: true},
    {id: 'dfg4852', text: 'Do the dishes', isCompleted: false},
]

