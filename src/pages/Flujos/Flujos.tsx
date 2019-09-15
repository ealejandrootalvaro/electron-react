import React, {useState} from 'react';
import {Paper} from '@material-ui/core';
import {match, Route} from 'react-router-dom';

import { Flujo } from '../../components/Flujos/types/Flujo';

import RutaFlujo from './Flujo';

import ListaFlujos from '../../components/Flujos/ListaFlujos';
import VistaFlujo from '../../components/Flujos/VistaFlujo';

export const flujos : Flujo[] = [ {
    id: "1",
    title: "Prueba 1"
} ]

const flujoSeleccionado = undefined;

export default function Flujos({path, url} : match ) {

    const [values, setValues] = useState({
        flujos,
        flujoSeleccionado
    });

    return (
        <div>
            <Paper style={{padding: 16, margin: 16}} >
                <ListaFlujos flujos={flujos} />
            </Paper>
            <Paper style={{padding: 16, margin: 16}} >
                <Route path={`flujos/:id`} component={RutaFlujo} />
            </Paper>
        </div>
    )
}