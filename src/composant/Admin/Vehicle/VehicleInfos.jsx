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
    const [input, setInput] = useState(detailVehicle);


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

    })

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
                                <InputText label='Marque' value={detailVehicle.vehBrand}
                                           onChange={(event) => update(event, 'vehBrand')}/>
                                <InputText label='Modèle' value={detailVehicle.vehModel}
                                           onChange={(event) => update(event, 'vehModel')}/>
                            </Grid>
                            <Grid direction={"column"}>
                                <InputText label='Immatriculation' value={detailVehicle.vehRegistration}
                                           onChange={(event) => update(event, 'vehRegistration')}/>
                                <InputText label='Couleur' value={detailVehicle.vehColor}
                                           onChange={(event) => update(event, 'vehColor')}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <InputText label='Nombre de places' value={detailVehicle.vehNumberplace}
                               onChange={(event) => update(event, 'vehNumberplace')}/>
                 {/*   <InputText label='Type de carburant' value={detailVehicle.vehTypeEssence}
                               onChange={(event) => update(event, 'vehTypeEssence')}/>*/}
                {/*    <InputText label='Pôle' value={detailVehicle.poleName}
                               onChange={(event) => update(event, 'poleName')}/>
*/}
                    <InputSelect
                        id={"vehTypeEssence"}
                        name={"vehTypeEssence"}
                        onChange={updateSelect}
                        label={"Carburant"}
                        data={carburants}
                        value={detailVehicle.vehTypeEssence}
                    />
                    <InputSelect
                        id={"poleName"}
                        name={"poleName"}
                        onChange={updateSelect}
                        label={"Pole"}
                        data={poles}
                        value={detailVehicle.poleName}
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
