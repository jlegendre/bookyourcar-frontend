import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import LocationList from "../../Commun/Location/LocationList/LocationList";

const ValidateReservation = props => {

    const {location, fetchAdminLocation} = props;

    useEffect(() => {
        fetchAdminLocation();
    }, [fetchAdminLocation]);

    return (
        <LocationList locations={location} completeView/>
    )
};

ValidateReservation.propTypes = {
    classes: PropTypes.object,
    location: PropTypes.array,
    fetchAdminLocation: PropTypes.func,
    fetchDetailLocation: PropTypes.func
};

export default ValidateReservation