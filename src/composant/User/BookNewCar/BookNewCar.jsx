import React, {useEffect, useState} from 'react';
//Material UI Componant
import CssBaseline from '@material-ui/core/CssBaseline';
import {Paper, Grid, Select, MenuItem} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from "@material-ui/core/Typography";
import InputText from './../../Input/InputText.js';

/**
 * Formulaire de réservation
 */
const BookNewCar = (props) => {
    const {classes, poles, fetchPoles} = props;

    const [formulaire, setFormulaire] = useState({dateDebut: "", dateFin: "", poleDebut: "", poleFin: ""});

    useEffect(() => {
        fetchPoles();
    }, []);

    console.log(poles);

    return (
        <div className={classes.main}>
            <CssBaseline/>
            <form>
                <Paper className={classes.paper}>
                    <Typography component={"h1"} variant={"h5"}>
                        Demande de réservation
                    </Typography>

                    <Grid container>
                        <Grid item xs={6}>
                            <InputText
                                value={formulaire.dateDebut}
                                name={"dateDebut"}
                                onChange={event => setFormulaire({...formulaire, dateDebut: event.target.value})}
                                placeholder="Début de la réservation"
                                type="datetime-local"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputText
                                value={formulaire.dateFin}
                                name={"dateFin"}
                                onChange={event => setFormulaire({...formulaire, dateFin: event.target.value})}
                                placeholder="Fin de la réservation"
                                type="datetime-local"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Select
                                value={formulaire.poleDebut}
                                onChange={event => setFormulaire({...formulaire, poleDebut: event.target.value})}
                            >
                                {poles && poles.map(item =>
                                    <MenuItem key={item.poleId} value={item.poleId}>{item.poleName}</MenuItem>
                                )}
                            </Select>
                        </Grid>
                        <Grid item xs={6}>
                            <Select
                                value={formulaire.poleFin}
                                onChange={event => setFormulaire({...formulaire, poleFin: event.target.value})}
                            >
                                {poles && poles.map(item =>
                                    <MenuItem key={item.poleId} value={item.poleId}>{item.poleName}</MenuItem>
                                )}
                            </Select>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        </div>
    );
};

BookNewCar.propTypes = {};

export default withStyles((theme) => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1000 + theme.spacing.unit * 3 * 2)]: {
            width: 1000,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    }
}))(BookNewCar)