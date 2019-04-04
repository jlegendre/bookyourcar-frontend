import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {CssBaseline, Paper, Table, TableBody, TableCell, TableHead, TableRow, IconButton,Icon, colors} from "@material-ui/core";

const VehicleInfos = props => {

    const {classes, fetchVehicleInfos, datapage} = props;
    useEffect(() => {
        fetchVehicleInfos();
    }, []);


    return (
        <div className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Marque</TableCell>
                            <TableCell>Modèle</TableCell>
                            <TableCell>Couleur</TableCell>
                            <TableCell>Immatriculation</TableCell>
                            <TableCell>Carburant</TableCell>
                            <TableCell>Nombre de places</TableCell>
                            <TableCell>Emplacement</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datapage && datapage.map((row, i) =>
                            <TableRow key={i}>
                                <TableCell>{row.vehBrand}</TableCell>
                                <TableCell>{row.vehModel}</TableCell>
                                <TableCell>{row.vehColor}</TableCell>
                                <TableCell>{row.vehRegistration}</TableCell>
                                <TableCell>{row.vehTypeEssence}</TableCell>
                                <TableCell>{row.vehNumberplace}</TableCell>
                                <TableCell>A faire</TableCell>
                                <TableCell><IconButton><Icon>pageview</Icon></IconButton></TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
};

VehicleInfos.propTypes = {
    classes: PropTypes.object,
    fetchVehicleInfos: PropTypes.func,
    datapage: PropTypes.array
};

export default withStyles(theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 'auto',
            marginLeft: '10%',
            marginRight: '10%',
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
        },
    }
}))(VehicleInfos);