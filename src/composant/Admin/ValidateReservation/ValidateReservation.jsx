import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import LocationList from "../../Commun/Location/LocationList";

const ValidateReservation = props => {

    const {locations, fetchAdminLocation} = props;

    useEffect(() => {
        fetchAdminLocation();
    }, [fetchAdminLocation]);

    return (
        <LocationList locations={locations} updateable={true} completeView/>
    )
};

ValidateReservation.propTypes = {
    classes: PropTypes.object,
    locations: PropTypes.array,
    fetchAdminLocation: PropTypes.func,
    fetchDetailLocation: PropTypes.func
};

export default ValidateReservation