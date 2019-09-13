import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {Button, CssBaseline} from "@material-ui/core";
import {getBreakingLimit} from "../../../utils/cssUtils";
import VehicleListItem from "./VehicleListItem";
import {Redirect} from "react-router";
import PopupPlanning from "./PopupPlanning.js";

const VehicleList = props => {

    const {classes, fetchVehicles, listVehicle} = props;

    const [newVehicule, setNewVehicule] = useState(false);
    const [openPopup, setOpenPopup] = useState(false);

    useEffect(() => {
        fetchVehicles();
    }, [fetchVehicles, openPopup]);

    if (newVehicule) {
        return <Redirect to={"vehicleCreate"}/>
    }

    return (
        <div className={classes.main}>
            <CssBaseline/>

            <div style={{marginBottom: 10}}>
                <Button variant={"contained"} color={"primary"} onClick={() => setNewVehicule(true)}>
                    Ajouter véhicule
                </Button>
                <Button variant={"contained"} color={"primary"} onClick={() => setOpenPopup(true)}>
                    Planning
                </Button>

                <PopupPlanning
                    open={openPopup}
                    onClose={() => setOpenPopup(false)}
                />
            </div>

            {listVehicle && listVehicle.map(item =>
                <VehicleListItem key={item.vehId} data={item}/>
            )}
        </div>
    )
};

VehicleList.propTypes = {
    classes: PropTypes.object,
    fetchVehicles: PropTypes.func,
    listVehicle: PropTypes.array
};

export default withStyles(theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(getBreakingLimit(theme))]: {
            width: 1000,
            marginLeft: 'auto',
            marginRight: 'auto',
        }
    },

}))(VehicleList);