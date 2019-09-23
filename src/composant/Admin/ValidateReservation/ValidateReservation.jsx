import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import LocationList from "../../Commun/Location/LocationList/LocationList";

const ValidateReservation = props => {

    const {locations, fetchAdminLocation} = props;

    useEffect(() => {
        fetchAdminLocation();
    }, [fetchAdminLocation]);

    console.log(locations);
    return (
        <LocationList locations={locations} completeView/>
    )
};

ValidateReservation.propTypes = {
    classes: PropTypes.object,
    locations: PropTypes.array,
    fetchAdminLocation: PropTypes.func,
    fetchDetailLocation: PropTypes.func
};

export default ValidateReservation