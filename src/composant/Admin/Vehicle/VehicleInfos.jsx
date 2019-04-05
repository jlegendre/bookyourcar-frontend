import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {
    CssBaseline,
    Paper,
    IconButton,
    Icon,
    colors
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/es/TextField/TextField";
import Grid from "@material-ui/core/Grid";

const VehicleInfos = props => {

    const {classes, fetchVehicleInfos, datapage, match} = props;

    useEffect(() => {
        console.log(match)
        fetchVehicleInfos(match.params.vehId);
    }, []);

    return (
        <div>
            <Paper className={classes.paper}>
                <Grid direction={"column"}>
                    <Grid direction={"row"}>
                        <p>PHOTO</p>
                        <Grid direction={"column"}>
                            <Grid direction={"row"}>
                                <TextField label={datapage.vehBrand}/>
                                <TextField label={datapage.vehModel}/>
                            </Grid>
                            <TextField label={datapage.vehRegistration}/>
                            <TextField label={datapage.vehColor}/>
                        </Grid>
                    </Grid>
                    <TextField label={datapage.vehNumberplace}/>
                    <TextField label={datapage.vehTypeEssence}/>
                    <TextField label={datapage.poleName}/>

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
    datapage: PropTypes.array
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