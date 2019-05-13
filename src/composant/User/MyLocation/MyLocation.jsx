import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {getBreakingLimit} from "../../../utils/cssUtils";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";

const MyLocation = props => {

    const {classes, location, fetchUserLocation} = props;

    useEffect(() => {
        fetchUserLocation();
    }, [fetchUserLocation]);

    return (
        <div className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Etat</TableCell>
                            <TableCell>Date début</TableCell>
                            <TableCell>Date de fin</TableCell>
                            <TableCell>Véhicule</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {location && location.map((item, i) =>
                            <TableRow key={i} className={classes.row}>
                                <TableCell>{item.locationState}</TableCell>
                                <TableCell>{item.dateDebutResa}</TableCell>
                                <TableCell>{item.dateFinResa}</TableCell>
                                <TableCell>{item.vehicleFriendlyName}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
};

MyLocation.propTypes = {
    classes: PropTypes.object,
    location: PropTypes.array,
    fetchUserLocation: PropTypes.func
};

export default withStyles(theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(getBreakingLimit(theme))]: {
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
        [theme.breakpoints.up(getBreakingLimit(theme))]: {
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
}))(MyLocation)