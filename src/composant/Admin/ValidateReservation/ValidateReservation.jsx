import React, {Fragment, useEffect} from 'react';
import * as PropTypes from 'prop-types';
import LocationList from "../../Commun/Location/LocationList";

const ValidateReservation = props => {

    const {locations, fetchAdminLocation, match} = props;

    useEffect(() => {
        fetchAdminLocation();
    }, [fetchAdminLocation]);

    return (
        <div>
            {locations.locationsAsked && locations.locationsAsked.length > 0 &&
            <Fragment>
                <LocationList locations={locations.locationsAsked} updateable={true} title={"Locations en attente"} completeView/>
                <div style={{marginBottom: '30px'}}/>
            </Fragment>
            }
            <LocationList locations={locations.allLocations} updateable={true} title={"Locations"} id={match.params.locationId} completeView/>

        </div>
    )
};

ValidateReservation.propTypes = {
    classes: PropTypes.object,
    locations: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    fetchAdminLocation: PropTypes.func,
    fetchDetailLocation: PropTypes.func
};

export default ValidateReservation