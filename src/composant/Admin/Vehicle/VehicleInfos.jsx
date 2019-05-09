import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {
    Icon,
    Paper,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/es/TextField/TextField";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const VehicleInfos = props => {

    const {classes, fetchVehicleInfos, detailVehicle, match} = props;

    useEffect(() => {
        fetchVehicleInfos(match.params.vehId);
    }, []);

    if(!detailVehicle){
        return (
            <div>
                <CircularProgress className={classes.progress} />
            </div>
        )
    }

    return (
        <div>
            <Paper className={classes.paper}>
                <Grid direction={"column"}>
                    <Grid direction={"row"}>
                        <Icon fontSize={"large"}>directions_car</Icon>
                        <Grid id="plop" direction={"column"}>
                            <Grid direction={"row"}>
                                <TextField label='Marque' value={detailVehicle.vehBrand}/>
                                <TextField label='Modèle' value={detailVehicle.vehModel}/>
                            </Grid>
                            <Grid direction={"column"}>
                                <TextField label='Immatriculation' value={detailVehicle.vehRegistration}/>
                                <TextField  label='Couleur' value={detailVehicle.vehColor}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <TextField label='Nombre de places' value={detailVehicle.vehNumberplace}/>
                    <TextField label='Type de carburant' value={detailVehicle.vehTypeEssence}/>
                    <TextField label='Pôle' value={detailVehicle.poleName}/>

                </Grid>
                <Grid direction={"row"}>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Mise à jour
                    </Button>
                    <Button variant="contained" color="secondary" className={classes.button}>
                        Supprimer
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