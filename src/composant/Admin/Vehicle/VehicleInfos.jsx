import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {Icon, Paper,} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputText from "../../Input/InputText";
import InputSelect from "../../Input/InputSelect";

const VehicleInfos = props => {

    const {classes, fetchVehicleInfos, detailVehicle, match, fetchUpdateVehicle, fetchDeleteVehicle, poles, fetchPoles} = props;
    const [input, setInput] = useState({
        vehId: 0,
        vehRegistration: '',
        vehBrand: '',
        vehModel: '',
        vehKm: 0,
        vehDatemec: '',
        vehTypeEssence: '',
        vehColor: '',
        vehNumberplace: '',
        vehIsactive: true,
        poleName: ''
    });


    useEffect(() => {
        fetchVehicleInfos(match.params.vehId, (vehicle) => {
            console.log(vehicle);
            setInput(vehicle);
        });
       fetchPoles();
    }, [fetchVehicleInfos, match.params.vehId, fetchPoles]);

    if (!detailVehicle) {
        return (
            <div>
                <CircularProgress className={classes.progress}/>
            </div>
        )
    }
    const update = ((event, type) => {
        console.log(input);

        setInput({
            ...input,
            [type]: event.target.value
        });
    });

    const updateVehicle = (() => {
        fetchUpdateVehicle(input);

    });

    const deleteVehicle = (() => {
        fetchDeleteVehicle(input.vehId);
    });

    const updateSelect = event => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    };


    const carburants = [
        {
            value: 'Essence',
            label: 'Essence',
        },
        {
            value: 'Diesel',
            label: 'Diesel',
        },
        {
            value: 'Electrique',
            label: 'Electrique',
        },
    ];


    return (
        <div>
            <Paper className={classes.paper}>
                <Grid direction={"column"}>
                    <Grid direction={"row"}>
                        <Icon fontSize={"large"}>directions_car</Icon>
                        <Grid id="plop" direction={"column"}>
                            <Grid direction={"row"}>
                                <InputText id='vehBrand' name='vehBrand' label='Marque' value={input.vehBrand}
                                           onChange={(event) => update(event, 'vehBrand')}/>
                                <InputText id='vehModel' name='vehModel' label='Modèle' value={input.vehModel}
                                           onChange={(event) => update(event, 'vehModel')}/>
                            </Grid>
                            <Grid direction={"column"}>
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
                </Grid>
                <Grid direction={"row"}>
                    <Button variant="contained" color="primary" className={classes.button}
                            onClick={() => updateVehicle()}
                    >
                        Mise à jour
                    </Button>
                    <Button variant="contained" color="secondary" className={classes.button}
                            onClick={() => deleteVehicle()}
                    >Supprimer
                    </Button>
                </Grid>

            </Paper>
        </div>
    )
};

VehicleInfos.propTypes = {
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
}))(VehicleInfos);
