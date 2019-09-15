import React, { useState } from 'react';
import {Paper} from '@material-ui/core';

import AddTask from '../components/Tasks/AddTask';
import TaskList from '../components/Tasks/TaskList';
import { Task } from '../components/Tasks/types/Task';

const initTask : Array<Task> = [
    {
        title: "Prueba",
        description: "Description",
        completed: false
    }
] 

export default function Tasks() {

    const [tasks, setTasks] = useState(initTask);

    function addTask(task: Task) {
        setTasks([...tasks, task]);
    }

    function clickTask(newTask: Task) : void {
        const newTasks = tasks.map(task => {
            if (task.title == newTask.title) {
                return {...task, completed: !task.completed}
            }
            return task;
        });
        setTasks(newTasks);
    }

    return (
        <div>
            <Paper style={{padding: 16, margin: 16}}>
                <AddTask addTask={addTask} />
            </Paper>
            <Paper style={{padding: 16, margin: 16}}>
                <TaskList tasks={tasks} handleClick={clickTask} />
            </Paper>
        </div>
    )
}