import React, {useEffect, useState} from 'react';
import {Redirect} from "react-router";
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {Paper,} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import InputText from "../../Input/InputText";
import InputSelect from "../../Input/InputSelect";
import _ from 'lodash';


const ValidateReservation = props => {

    const {classes, match, fetchGetLocation, fetchValidateLocation, fetchDeleteLocation, fetchUserLocation} = props;
    const [redirect, setRedirect] = useState(false);
    const [input, setInput] = useState({
        locationState: '',
        availableVehicle: [],
        commentsList: [],
        dateDebutResa: "",
        dateFinResa: "",
        locationStateId: 0,
        poleDepart: "",
        poleDestination: "",
        selectedVehicle: null,
        userId: 0,
    });


    useEffect(() => {
        fetchGetLocation(match.params.locationId, (locationDet) => {
            setInput(
                locationDet
            );
        });

    }, [match.params.locationId, fetchGetLocation]);

    const updateSelect = event => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    };


    const getVehicleForSelect = () => {
        return _.map(input.availableVehicle, (vehicle) => {
            return {value: vehicle.vehId, label: vehicle.vehBrand + ' ' + vehicle.vehModel}
        })
    };

    const validateReservation = () => {
        fetchValidateLocation(input.locationStateId, input);
        setRedirect(true);

    };
    const deleteReservation = () => {
        fetchDeleteLocation(input.locationStateId);
    };

    if (redirect) {
        fetchUserLocation();
        return <Redirect push to="/validateReservation"/>;
    }

    return (
        <div>
            <Paper className={classes.paper}>
                <div className={classes.container}>
                    <InputText marginLeft={10} fullWidth={false} disabled id='deb' name='deb' label='Début'
                               value={input.dateDebutResa} className={classes.input}/>
                    <InputText marginLeft={10} fullWidth={false} disabled id='fin' name='fin' label='Fin'
                               value={input.dateFinResa} className={classes.input}/>
                    <InputText marginLeft={10} fullWidth={false} disabled id='poleDeb' name='poleDeb'
                               label='Pole de départ'
                               value={input.poleDepart} className={classes.input}/>
                    <InputText marginLeft={10} fullWidth={false} disabled id='poleFin' name='poleFin'
                               label='Pole de destination'
                               value={input.poleDestination} className={classes.input}/>
                    <InputText marginLeft={10} fullWidth={false} disabled id='etat' name='etat'
                               label='Etat de la réservation'
                               value={input.locationState} className={classes.input}/>
                    <InputSelect
                        id={"vehicule"}
                        name={"selectedVehicle"}
                        onChange={updateSelect}
                        label={"Vehicule à attribuer"}
                        data={getVehicleForSelect()}
                        value={input.selectedVehicle}
                        className={classes.input}
                        fullWidth={false} width={150}/>
                    <Button disabled={input.locationState === 'Terminée' || input.selectedVehicle === null}
                            variant="contained" color="primary" className={classes.button}
                            onClick={() => validateReservation()} classeName={classes.button}>
                        Valider
                    </Button>
                    <Button disabled={input.locationState === 'Terminée'} variant="contained" color="secondary"
                            className={classes.button}
                            onClick={() => deleteReservation()} classes={classes.button}>
                        Refuser
                    </Button>
                </div>


                {/*<Grid direction={"row"}>
                    <Grid direction={'column'}>
                        <InputText disabled id='deb' name='deb' label='Début' value={input.dateDebutResa}/>
                        <InputText disabled id='fin' name='fin' label='Fin' value={input.dateFinResa}/>
                    </Grid>
                    <Grid direction={'row'}>
                        <InputText disabled id='poleDeb' name='poleDeb' label='Pole de départ'
                                   value={input.poleDepart}/>
                        <InputText disabled id='poleFin' name='poleFin' label='Pole de destination'
                                   value={input.poleDestination}/>
                    </Grid>
                    <Grid direction={'column'}>
                        <InputText disabled id='etat' name='etat' label='Etat de la réservation'
                                   value={input.locationState}/>
                        <InputSelect
                            id={"vehicule"}
                            name={"selectedVehicle"}
                            onChange={updateSelect}
                            label={"Vehicule à attribuer"}
                            data={getVehicleForSelect()}
                            value={input.selectedVehicle}
                        />
                    </Grid>

                    <Grid container direction={"column"}>
                        <Button disabled={input.locationState === 'Terminée' || input.selectedVehicle === null}
                                variant="contained" color="primary" className={classes.button}
                                onClick={() => validateReservation()}>
                            Valider
                        </Button>
                        <Button disabled={input.locationState === 'Terminée'} variant="contained" color="secondary"
                                className={classes.button}
                                onClick={() => deleteReservation()}>
                            Refuser
                        </Button>
                    </Grid>
                </Grid>*/}
            </Paper>
        </div>
    )
};

ValidateReservation.propTypes = {
    classes: PropTypes.object,
    fetchVehicleInfos: PropTypes.func,
    detailVehicle: PropTypes.object
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
    },

    container: {
        display: 'flex',
        width: 340,
        'flex-wrap': 'wrap',
    },

    input: {
        width: 160,
        marginRight: 10,
    },

    button: {
        width: 160,
        marginRight: 10,
    }
}))(ValidateReservation);
