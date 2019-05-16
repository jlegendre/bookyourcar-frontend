import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {getBreakingLimit} from "../../../utils/cssUtils";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import LocationList from "../../Commun/Location/LocationList/LocationList.js";

const MyLocation = props => {

    const {classes, location, fetchUserLocation} = props;

    useEffect(() => {
        fetchUserLocation();
    }, [fetchUserLocation]);

    return (
        <div className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
                <LocationList locations={location}/>
            </Paper>
        </div>
    )
};

MyLocation.propTypes = {
    classes: PropTypes.object,
    location: PropTypes.array,
    fetchUserLocation: PropTypes.func
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
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        [theme.breakpoints.up(getBreakingLimit(theme))]: {
            width: '100%',
            padding: 0
        }
    }
}))(MyLocation)