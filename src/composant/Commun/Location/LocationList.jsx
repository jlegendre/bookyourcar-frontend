import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import PopupValidateReservation from "./PopupValidateReservation/PopupValidateReservation";
import Table from "../Table/Table";
import columns from "./columns";
import {formatDate} from "../../../utils/dateUtils";


const LocationList = props => {

    const {locations, fetchDetailLocation, updateFetchLocation, updateable} = props;

    const [popupOpen, setPopupOpen] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(null);


    locations.forEach((loc) => {
        loc.dateDebutResa = formatDate(new Date(loc.dateDebutResa));
        loc.dateFinResa = formatDate(new Date(loc.dateFinResa));
    });

    /**
     * Accepte la location
     * @param location location a transmettre
     */
    const acceptLocation = (location) => {
        updateFetchLocation(location.locId, location.selectedVehicle, 'Validate');
        setPopupOpen(false);
    };
    /**
     * Mets a jour la location
     * @param location location a transmettre
     */
    const updateLocation = (location) => {
        updateFetchLocation(location.locId, location.vehicleId, 'Update');
        setPopupOpen(false);
    };

    /**
     * Démarre la location
     * @param location location a transmettre
     */
    const startLocation = location => {
        updateFetchLocation(location.locId, null, 'Start');
        setPopupOpen(false);
    };

    /**
     * Met fin a la location
     * @param location location a transmettre
     */
    const endLocation = location => {
        updateFetchLocation(location.locId, null, 'Finish');
        setPopupOpen(false);
    };

    /**
     * Refuse la location
     * @param location location a transmettre
     */
    const refuseLocation = location => {
        updateFetchLocation(location.locId, 0, 'Cancel');
        setPopupOpen(false)
    };


    const openLocation = row => {
        fetchDetailLocation(row.locationId, success => {
            setCurrentLocation(success);
            setPopupOpen(true);
        });
    };

    return (
        <React.Fragment>
            <Table
                title={"Locations"}
                columns={columns}
                data={locations}
                onClick={openLocation}
            />

            <PopupValidateReservation
                open={popupOpen}
                onAccept={acceptLocation}
                onRefuser={refuseLocation}
                onStart={startLocation}
                onFinish={endLocation}
                onUpdate={updateLocation}
                data={currentLocation}
                setData={setCurrentLocation}
                updateable={updateable}
                onClose={() => setPopupOpen(false)}
            />
        </React.Fragment>
    )
};

LocationList.propTypes = {
    locations: PropTypes.array.isRequired,
    completeView: PropTypes.bool,
    fetchDetailLocation: PropTypes.func,
    updateable: PropTypes.bool,
};

export default LocationList;
