import React from 'react';
import {Button, Paper, TextField} from '@material-ui/core';


export default function Tasks() {
    return (
        <div>
            <h1>Tasks 2!</h1>
            <Paper style={{padding: 16, margin: 16}}>
                <TextField  placeholder="Add Todo" />
                <Button>Add</Button>
            </Paper>
            <Paper style={{padding: 16, margin: 16}}>
                <h3>Lista de todos</h3>
            </Paper>
        </div>
    )
}