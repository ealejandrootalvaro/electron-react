import React from 'react';

import { Flujo } from './types/Flujo';

import { Link } from 'react-router-dom';

export interface IProps {
    flujos: Flujo[]
}

export default function({flujos} : IProps) {
    
    function render(flujo: Flujo) {
        return (
            <>
                <Link to={`/flujos/${flujo.id}`} >{flujo.title}</Link>
            </>
        )
    }
    
    return (
        <>
            {flujos.map(render)}
        </>
    )
}