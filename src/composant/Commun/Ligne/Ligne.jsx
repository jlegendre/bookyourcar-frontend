import React from "react";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import {Link} from "react-router-dom";

export const Ligne = withStyles({
    ligne: {
        display: 'flex', marginBottom: '1em', cursor: 'pointer', height: 100
    }
})(props => {
    const {classes, children, ...autre} = props;
    return <Paper className={classes.ligne}{...autre}>{children}</Paper>
});

export const Colonne = withStyles({
    colonne: {flexDirection: 'column', flexWrap: 'wrap', width: 250}
})(props => {
    const {classes, children, ...autre} = props;
    return <div className={classes} {...autre}>{children}</div>
});


export const Element = withStyles({
    element: {flex: 1, padding: '0.5em', margin: 'auto'}
})(props => {
    const {classes, children, to, ...autre} = props;

    if (to) {
        return <Link to={to} {...autre} className={classes.element}>
            <span className={{verticalAlign: 'middle'}}>{children}</span>
        </Link>

    }
    return (
        <div {...autre} className={classes.element}>
            <span className={{verticalAlign: 'middle'}}>{children}
            </span>
        </div>
    );

});