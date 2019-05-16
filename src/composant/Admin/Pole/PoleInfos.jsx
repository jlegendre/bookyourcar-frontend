import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {CssBaseline, Paper, Table, TableBody, TableCell, TableRow, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputText from "../../Commun/Input/InputText";
import { Redirect } from "react-router";

const PoleInfos = props => {

    const { classes, fetchPoleInfos, fetchUpdatePole, detailPole, match, fetchPoles } = props;
    const [input, setInput] = useState({ poleId: 0, poleName: '', poleCity: '', poleAddress: '', poleCp: '' });
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetchPoleInfos(match.params.poleId, (pole) => {
            setInput(pole);
        });

    }, [fetchPoleInfos, match.params.poleId]);


    const update = ((event, type) => {
        setInput({
            ...input,
            [type]: event.target.value
        });
    });

    const updatepole = (() => {
        fetchUpdatePole(input);
        setRedirect(true);
    })

    if (redirect) {
        fetchPoles();
        return <Redirect push to="/poleList" />
    }

    if (!detailPole) {
        return (
            <div>
                <CircularProgress className={classes.progress}/>
            </div>
        )
    }

    return (
        <div className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
                <Typography variant="h4" gutterBottom>Pole</Typography>
                <Table className={classes.table}>
                    <TableBody>

                        <TableRow>
                            <TableCell className={classes.cell}>Nom : </TableCell>
                            <TableCell className={classes.cell}><InputText id='poleName' name='poleName' value={input.poleName}
                                                                           onChange={(event) => update(event, 'poleName')}/></TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.cell}>Adresse : </TableCell>
                            <TableCell className={classes.cell}><InputText id='poleAdress' name='poleAddress' value={input.poleAddress}
                                                                           onChange={(event) => update(event, 'poleAddress')}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.cell}>Code postal : </TableCell>
                            <TableCell className={classes.cell}><InputText id='poleCp' name='poleCp' value={input.poleCp}
                                                                           onChange={(event) => update(event, 'poleCp')}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.cell}>Ville : </TableCell>
                            <TableCell className={classes.cell}><InputText id='poleCity' name='poleCity' value={input.poleCity}
                                                                           onChange={(event) => update(event, 'poleCity')}/></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => updatepole()}
                >
                    Valider
                </Button>
            </Paper>
        </div>
    )
};


PoleInfos.propTypes = {
    classes: PropTypes.object,
    fetchPoleInfos: PropTypes.func,
    detailPole: PropTypes.object
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
    cell: {
        border: 'none',

    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
        border: 'none',
    }
}))(PoleInfos);