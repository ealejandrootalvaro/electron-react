import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

import { Task } from './types/Task';

export interface IProps {
    addTask: (task: Task) => void
}

const initialValues = {
    title: ""
}

export default function AddTask({addTask} : IProps) {

    const [values, setValues] = useState(initialValues);

    const handleChange = (name : string)  => (event: any) => {
        setValues({ ...values, [name]: event.target.value });
    }

    function handleClick() {
        if (!values.title) {
            alert("Ingrese un titulo para la tarea");
            return;
        }
        const task : Task = {
            title: values.title,
            description: "",
            completed: false
        }
        addTask(task);
        setValues(initialValues);
    }

    return (
        <>
            <TextField  placeholder="Add Todo" value={values.title} onChange={handleChange('title')} />
            <Button onClick={handleClick} >Add</Button>
        </>
    )
}