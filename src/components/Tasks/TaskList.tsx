import React from 'react';

import { Task } from './types/Task';

export interface IProps {
    tasks: Array<Task>,
    handleClick: (task: Task) => void
}


export default function TaskList({tasks, handleClick} : IProps) {

    function renderTasks(task: Task) {
        const style = task.completed ? { color: "red" } : { };
        return (
            <div onClick={() => handleClick(task)} style={ style } >
                <p>{task.title}</p>
                <p>{task.description}</p>
                <hr></hr>
            </div>
        )
    }

    return (
        <>
            <h3>Lista de tareas</h3>
            {tasks.map(renderTasks)}
        </>
    )
}