import React from "react";
import Paper from "@material-ui/core/Paper";

export const Ligne = props => {

    const {children, ...autre} = props;

    return (
        <Paper
            style={{
                display: 'flex',
                marginBottom: '1em',
                cursor: 'pointer',
                height: 100
            }}
            {...autre}
        >
            {children}
        </Paper>
    )
};

export const Colonne = props => {
    const {children, ...autre} = props;
    return <div
        style={{
            flexDirection: 'column',
            flexWrap: 'wrap',
            width: 250
        }}
        {...autre}
    >
        {children}
    </div>
};

export const Element = props => {
    const {children, ...autre} = props;
    return (<div
            style={{
                flex: 1,
                padding: '0.5em',
                // textAlign: 'center',
                margin: 'auto'
            }}
            {...autre}
        >
            <span className={{
                verticalAlign: 'middle'
            }}>
            {children}
            </span>
        </div>
    )
};