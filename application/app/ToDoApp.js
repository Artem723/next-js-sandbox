"use client"
import { useState } from 'react'
import Task from './Task'

export default function ToDoApp() {
    
    const [ tasks, setTasks ] = useState(tasksInit);
    const tasksTree = tasks.map(v => <Task key={v.task + v.isCompleted} task={v} />)

    return (
        <ul>
            <form>
                <input />
                <button type="submit">Add</button>
            </form>
            
            {tasksTree}
        </ul>
    )
}


const tasksInit = [
    {text: 'Water the flowers', isCompleted: 0},
    {text: 'Cook the dinner', isCompleted: 1},
    {text: 'Do the dishes', isCompleted: 0},
]