import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {Paper,} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputText from "../../Input/InputText";
import InputSelect from "../../Input/InputSelect";
import _ from 'lodash';


const ValidateReservation = props => {

    const {classes, match, fetchGetLocation, fetchValidateLocation, fetchDeleteLocation} = props;
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
    };
    const deleteReservation = () => {
        fetchDeleteLocation(input.locationStateId);
    };

    return (
        <div>
            <Paper className={classes.paper}>
                <Grid direction={'column'}>

                    <Grid direction={'row'}>
                        <InputText disabled id='deb' name='deb' label='Début' value={input.dateDebutResa}/>
                        <InputText disabled id='fin' name='fin' label='Fin' value={input.dateFinResa}/>
                        <InputText disabled id='poleDeb' name='poleDeb' label='Pole de départ'
                                   value={input.poleDepart}/>
                        <InputText disabled id='poleFin' name='poleFin' label='Pole de destination'
                                   value={input.poleDestination}/>
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
                    <Grid container direction={"row"}>
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
                </Grid>
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
    }
}))(ValidateReservation);
