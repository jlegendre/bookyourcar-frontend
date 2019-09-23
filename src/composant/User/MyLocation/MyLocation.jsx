import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {getBreakingLimit} from "../../../utils/cssUtils";
import LocationList from "../../Commun/Location/LocationList/LocationList.js";

const MyLocation = props => {

    const {classes, locations, fetchUserLocation} = props;

    useEffect(() => {
        fetchUserLocation();
    }, [fetchUserLocation]);

    if (locations.length !== 0) {
        return (
            <LocationList locations={locations}/>
        )
    } else {
        return (
            <div className={classes.noLocDiv}>
                <h1 className={classes.noLocText}>Aucune location enregistrée</h1>
            </div>
        )
    }
};

MyLocation.propTypes = {
    classes: PropTypes.object,
    locations: PropTypes.array,
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
    noLocDiv: {
        display: 'flex',
        justifyContent: 'center'
    },
    noLocText: {
        color: 'dimgray'
    },
}))(MyLocation)