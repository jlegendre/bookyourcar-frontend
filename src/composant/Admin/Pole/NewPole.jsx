import React, { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {
    CssBaseline,
    Icon,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import InputText from "../../Input/InputText";

const NewPole = props => {

    const { classes, fetchAddPole, datapage, token } = props;

    const [input, setInput] = useState({poleName: '', poleCity: '', poleAddress: '', poleCp: ''});

    const update = ((event, type) => {
        setInput({
            ...input,
            [type]: event.target.value
        });
    });

    const createPole = () => {
        fetchAddPole(input)
    };

    return (
        <div className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
                <Typography variant="h4" gutterBottom>Pole</Typography>
                <Table className={classes.table}>
                    <TableBody>

                        <TableRow>
                            <TableCell className={classes.cell}>Nom : </TableCell>
                            <TableCell className={classes.cell}><InputText  onChange={(event) => update(event, 'poleName')} /></TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.cell}>Adresse : </TableCell>
                            <TableCell className={classes.cell}><InputText onChange={(event) => update(event, 'poleAddress')} /> </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.cell}>Code postal : </TableCell>
                            <TableCell className={classes.cell}><InputText onChange={(event) => update(event, 'poleCp')} />  </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.cell}>Ville : </TableCell>
                            <TableCell className={classes.cell}><InputText  onChange={(event) => update(event, 'poleCity')} /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => createPole()}
                >
                    Cr�er le pole
                        </Button>
            </Paper>
        </div>
    )
};

NewPole.propTypes = {
    classes: PropTypes.object,
    fetchVehicles: PropTypes.func,
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
}))(NewPole);