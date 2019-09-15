import React from "react";

import { Flujo } from './types/Flujo';

export interface IProps {
    flujo: Flujo
}

export default function VistaFlujo({ flujo } : IProps ) {
        return (
            <>
                <h1>Viendo flujo: {flujo.title}</h1>
            </>
        )
}