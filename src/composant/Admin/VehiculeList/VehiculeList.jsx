import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {CssBaseline, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";

const VehiculeList = props => {

    const {classes} = props;

    const data = [
        {name: "Joe", firstName: "Dupond", email: "joe.dupond@gmail.com", pole: "Nantes"}
    ];

    return (
        <div className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
                <Table 	EmailclassName={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Marque</TableCell>
                            <TableCell>Modèle</TableCell>
                            <TableCell>Couleur</TableCell>
                            <TableCell>Immatriculation</TableCell>
                            <TableCell>Carburant</TableCell>
                            <TableCell>Nombre de places</TableCell>
                            <TableCell>Emplacement</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, i) =>
                            <TableRow key={i}>
                                <TableCell>{row.email}</TableCell>
                                {Object.values(row).map((item , i) =>
                                    <TableCell key={i}>{item}</TableCell>
                                )}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
};

ValidUser.propTypes = {
    classes: PropTypes.object
};

export default withStyles(theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 1000,
            marginLeft: 'auto',
            marginRight: 'auto',
        }
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: '100%',
            padding: 0
        }
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        }
    }
}))(ValidUser);