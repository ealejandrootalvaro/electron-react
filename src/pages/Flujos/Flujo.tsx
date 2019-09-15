import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import VistaFlujo from '../../components/Flujos/VistaFlujo';
import { flujos } from './Flujos';

interface RouteProps {
    id: string
}

export default function Flujo({ match }: RouteComponentProps<RouteProps>) {

    const flujo = flujos.find((element) => element.id  == match.params.id);

    if (!flujo) {
        return (
            <>
                <h1>Flujo no encontrado</h1>
            </>
        )
    }

    return (
        <>
            <VistaFlujo flujo={flujo} />
        </>
    )
}