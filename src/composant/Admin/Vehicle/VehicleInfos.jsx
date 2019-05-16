import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {Paper,} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputSelect from "../../Commun/Input/InputSelect";
import Image from "../../Commun/Input/Image";

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
                <div className={classes.globalFlexContainer}>
                    <div className={classes.containerImage}>
                        <Image name={'car.svg'} width={680} height={480}/>
                    </div>
                    <div className={classes.container}>
                        <div className={classes.containerV}>
                            <span className={classes.labelTitle}>{input.vehBrand} - {input.vehModel}</span>
                            <span className={classes.label}>{input.vehColor}</span>
                            <span className={classes.label}> Nombres de places : {input.vehNumberplace}</span>
                            <div>
                                <div className={classes.divText}> Immatriculation : {input.vehRegistration}</div>
                                <div className={classes.divText}> Mise en circulation : {input.vehDatemec}</div>
                                <InputSelect
                                    fullWidth={false}
                                    className={classes.input}
                                    id={"vehTypeEssence"}
                                    name={"vehTypeEssence"}
                                    onChange={updateSelect}
                                    label={"Carburant"}
                                    data={carburants}
                                    value={input.vehTypeEssence}
                                />
                                <InputSelect
                                    fullWidth={false}
                                    className={classes.input}
                                    id={"poleName"}
                                    name={"poleName"}
                                    onChange={updateSelect}
                                    label={"Pole"}
                                    data={poles}
                                    value={input.poleName}
                                />
                            </div>
                            <div className={classes.globalFlexContainer}>
                                <Button variant="contained" color="primary" className={classes.button}
                                        onClick={() => updateVehicle()}
                                >
                                    Mise à jour
                                </Button>
                                <Button variant="contained" color="secondary" className={classes.button}
                                        onClick={() => deleteVehicle()}
                                >Supprimer
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
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
        width: 320,
        'flex-wrap': 'wrap',
    },
    containerV: {
        display: 'flex',
        flexDirection: 'column',
        width: 320,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    containerImage: {
        display: 'flex',
        width: 200,
        marginRight: 200,
    },
    globalFlexContainer: {
        display: 'flex',
    },

    input: {
        width: 250,
        marginRight: 10,
    },

    label: {
        fontSize: 'large',
        textAlign: 'center'
    },
    labelTitle: {
        fontSize: 'xx-large',
        textAlign: 'center'

    },

    divText: {
        fontSize: 'large',
    },

    button: {
        width: 150,
        height: 40,
        marginRight: 10,
    }
}))(VehicleInfos);
