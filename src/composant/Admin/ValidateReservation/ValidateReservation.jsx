import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {getBreakingLimit} from "../../../utils/cssUtils";
import CssBaseline from "@material-ui/core/CssBaseline";
import LocationList from "../../Commun/Location/LocationList/LocationList";

const ValidateReservation = props => {

    const {classes, location, fetchAdminLocation} = props;

    useEffect(() => {
        fetchAdminLocation();
    }, [fetchAdminLocation]);

    return (
        <div className={classes.main}>
            <CssBaseline/>
            <LocationList locations={location} completeView/>
        </div>
    )
};

ValidateReservation.propTypes = {
    classes: PropTypes.object,
    location: PropTypes.array,
    fetchAdminLocation: PropTypes.func,
    fetchDetailLocation: PropTypes.func
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
}))(ValidateReservation)