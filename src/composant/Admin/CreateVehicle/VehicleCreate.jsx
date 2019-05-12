import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {Icon, Paper,InputAdornment, TextField, MenuItem} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputText from "../../Input/InputText";
import InputSelect from "../../Input/InputSelect";

const VehicleCreate = props => {

    const {classes, fetchCreateVehicle,  fetchPoles, poles} = props;
    const [input, setInput] = useState({vehId :0, vehRegistration: '', vehBrand: '', vehModel: '', vehKm: 0, vehDatemec: '', vehTypeEssence: '', vehColor: '', vehNumberplace: '', vehIsactive: true, poleName: ''});


    useEffect(() => {
        fetchPoles()
    }, [fetchPoles]);

    const update = ((event, type) => {
        console.log(input)
        if(!input) {
            setInput({
                ...input,
                ['vehId']: 0,
                ['vehIsactive']: true,
                [type]: event.target.value
            })
        } else if(event){
            setInput({
                ...input,
                [type]: event.target.value
            });
        };
    });

    const createVehicle = (() => {

        fetchCreateVehicle(input);
    });
    const carburants = [
        {
            value: 'Essence',
            label: 'Essence',
        },
        {
            value: 'Diesel',
            label: 'Diesel',
        },
    ];

    const updateSelect = event => {
        console.log(event);
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        console.log(input)
    };

    return (
        <div>
            <Paper className={classes.paper}>
                <form className={classes.container} noValidate autoComplete="off">
                    <Grid direction={"column"}>
                        <Grid direction={"row"}>
                            <Icon fontSize={"large"}>directions_car</Icon>
                            <Grid id="plop" direction={"column"}>
                                <Grid direction={"row"}>
                                    <InputText required label='Marque'
                                               onChange={(event) => update(event, 'vehBrand')}/>
                                    <InputText required label='Modèle'
                                               onChange={(event) => update(event, 'vehModel')}/>
                                </Grid>
                                <Grid direction={"column"}>
                                    <InputText required label='Immatriculation'
                                               onChange={(event) => update(event, 'vehRegistration')}/>
                                               <InputText label="date d'immatriculation" type={'date'} required onChange={(event) => update(event, 'vehDatemec')}
                                                          InputLabelProps={{
                                                              shrink: true,
                                                          }}/>
                                    <InputText required label='Couleur'
                                               onChange={(event) => update(event, 'vehColor')}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <InputText required={true} type='number' label='Nombre de places'
                                   onChange={(event) => update(event, 'vehNumberplace')}/>
                                   <InputText required={true} type='number' label='Kilometrage'
                                   onChange={(event) => update(event, 'vehKm')}/>
                     {/*   <InputText required={true} label='Type de carburant'
                                   onChange={(event) => update(event, 'vehTypeEssence')}/>*/}
                        <InputSelect
                            id={"vehTypeEssence"}
                            name={"vehTypeEssence"}
                            onChange={updateSelect}
                            label={"Carburant"}
                            data={carburants}
                            value={input.vehTypeEssence}
                        />
{/*

                        <TextField
                            select
                            label="Type de carburant"
                            className={classes.margin}
                            onChange={update(undefined, 'vehTypeEssence')}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                            }}
                        >
                            {ranges.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
*/}

                        <InputSelect
                            id={"poleName"}
                            name={"poleName"}
                            onChange={updateSelect}
                            label={"Pole"}
                            data={poles}
                            value={input.poleName}
                        />

                    </Grid>
                </form>
                <Grid direction={"row"}>
                    <Button variant="contained" color="primary" className={classes.button}
                            onClick={() => createVehicle()}
                    >
                        Créer
                    </Button>
                </Grid>

            </Paper>
        </div>
    )
};

VehicleCreate.propTypes = {
    classes: PropTypes.object,
    fetchVehicleInfos: PropTypes.func,
    detailVehicle: PropTypes.object
};

export default withStyles(theme => ({
    main: {
        // width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 'auto',
            marginLeft: '10%',
            marginRight: '10%',
        },
        width: 700,

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
        },
        width: 700,

    },


    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    }
}))(VehicleCreate);
