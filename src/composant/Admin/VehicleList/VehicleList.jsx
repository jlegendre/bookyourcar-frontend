import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {CssBaseline} from "@material-ui/core";
import {getBreakingLimit} from "../../../utils/cssUtils";
import VehicleListItem from "./VehicleListItem";

const VehicleList = props => {

    const {classes, fetchVehicles, listVehicle} = props;

    useEffect(() => {
        fetchVehicles();
    }, [fetchVehicles]);

    return (
        <div className={classes.main}>
            <CssBaseline/>

            {listVehicle && listVehicle.map(item =>
                <VehicleListItem key={item.vehId} data={item} />
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