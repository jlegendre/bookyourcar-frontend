import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {Paper,} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputText from "../../Input/InputText";
import InputSelect from "../../Input/InputSelect";

const ValidateReservation = props => {

    const {classes, match, fetchGetLocation} = props;
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

    let disabled = false;

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

    const update = () => {

    };


    return (
        <div>
            <Paper className={classes.paper}>
                <Grid>
                    <InputText id='vehModel' name='vehModel' label='Début' value={input.dateDebutResa}
                               onChange={(event) => update(event, 'vehModel')}/>
                    <InputText id='vehModel' name='vehModel' label='Fin' value={input.dateFinResa}
                               onChange={(event) => update(event, 'vehModel')}/>
                    <InputText id='vehModel' name='vehModel' label='Pole de départ' value={input.poleDepart}
                               onChange={(event) => update(event, 'vehModel')}/>
                    <InputText id='vehModel' name='vehModel' label='Pole de destination' value={input.poleDestination}
                               onChange={(event) => update(event, 'vehModel')}/>
                    <InputText id='vehModel' name='vehModel' label='Etat de la réservation' value={input.locationState}
                               onChange={(event) => update(event, 'vehModel')}/>
                    <InputSelect
                        id={"vehicule"}
                        name={"vehicule"}
                        onChange={updateSelect}
                        label={"Vehicule à attribuer"}
                        data={input.availableVehicle}
                        value={input.availableVehicle}
                    />
                </Grid>
                {/*<Grid container direction={"column"}>
                    <Grid container direction={"row"}>
                        <Icon fontSize={"large"}>directions_car</Icon>
                        <Grid id="plop" direction={"column"}>
                            <Grid container direction={"row"}>
                                <InputText id='vehBrand' name='vehBrand' label='Marque' value={input.vehBrand}
                                           onChange={(event) => update(event, 'vehBrand')}/>
                                <InputText id='vehModel' name='vehModel' label='Modèle' value={input.vehModel}
                                           onChange={(event) => update(event, 'vehModel')}/>
                            </Grid>
                            <Grid container direction={"column"}>
                                <InputText id='vehRegistration' name='vehRegistration' label='Immatriculation' value={input.vehRegistration}
                                           onChange={(event) => update(event, 'vehRegistration')}/>
                                <InputText id='vehColor' name='vehColor' label='Couleur' value={input.vehColor}
                                           onChange={(event) => update(event, 'vehColor')}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <InputText id='vehNumberplace' name='vehNumberplace' label='Nombre de places' type={'number'} value={input.vehNumberplace}
                               onChange={(event) => update(event, 'vehNumberplace')}/>
                    <InputSelect
                        id={"vehTypeEssence"}
                        name={"vehTypeEssence"}
                        onChange={updateSelect}
                        label={"Carburant"}
                        data={carburants}
                        value={input.vehTypeEssence}
                    />
                    <InputSelect
                        id={"poleName"}
                        name={"poleName"}
                        onChange={updateSelect}
                        label={"Pole"}
                        data={poles}
                        value={input.poleName}
                    />
                </Grid>*/}
                <Grid container direction={"row"}>
                    <Button variant="contained" color="primary" className={classes.button}
                    >
                        Mise à jour
                    </Button>

                    <Button disabled={disabled} variant="contained" color="secondary" className={classes.button}
                    >Supprimer
                    </Button>
                </Grid>
                }

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
