import React, {useEffect, useState} from 'react';
import {Redirect} from "react-router";
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {Paper,} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import InputSelect from "../../Commun/Input/InputSelect";
import _ from 'lodash';


const ValidateReservation = props => {

    const {classes, match, fetchGetLocation, fetchValidateLocation, fetchDeleteLocation} = props;
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

    const [user, setUser] = useState('');
    useEffect(() => {
        fetchGetLocation(match.params.locationId, (locationDet) => {
            setInput(
                locationDet
            );
            setUser(locationDet.commentsList[0].friendlyName);
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
        fetchValidateLocation(match.params.locationId, {vehicleId: input.selectedVehicle});
        setRedirect(true);

    };
    const deleteReservation = () => {
        fetchDeleteLocation(input.locationStateId);
    };

    if (redirect) {
        return <Redirect push to="/validateReservation"/>;
    }

    return (
        <div>
            <Paper className={classes.paper}>
                <div className={classes.container}>
                    <span className={classes.labelTitle}>Réservation de {user}</span>
                    <span className={classes.label}> Début: {input.dateDebutResa}</span>
                    <span className={classes.label}> Fin: {input.dateFinResa}</span>
                    <span className={classes.label}> Pole de départ: {input.poleDepart}</span>
                    <span className={classes.label}> Pole d'arrivé{input.poleDestination}</span>
                    <span className={classes.label}> Etat: {input.locationState}</span>
                    <InputSelect
                        id={"vehicule"}
                        name={"selectedVehicle"}
                        onChange={updateSelect}
                        label={"Vehicule à attribuer"}
                        data={getVehicleForSelect()}
                        value={input.selectedVehicle}
                        className={classes.input}
                        fullWidth={false}/>
                    <div>
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
                </div>
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
            width: '50%',
            padding: 0,
            marginLeft: '25%'
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
        width: 350,
        flexDirection: 'column',
        alignItems: 'center'
    },

    input: {
        width: 200,
        marginRight: 10,
    },
    inputContainer: {
        display: 'flex',
    },

    button: {
        width: 160,
        marginRight: 10,
    },
    label: {
        fontSize: 'large',
        textAlign: 'center',
        marginTop: 10,
    },
    labelTitle: {
        fontSize: 'xx-large',
        textAlign: 'center',
        marginBottom: 10

    },
}))(ValidateReservation);
