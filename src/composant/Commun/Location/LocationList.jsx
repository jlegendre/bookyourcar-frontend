import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import PopupValidateReservation from "./PopupValidateReservation/PopupValidateReservation";
import Table from "../Table/Table";
import columns from "./columns";


const LocationList = props => {

    const {locations, fetchDetailLocation, updateFetchLocation, updateable, id} = props;

    const [popupOpen, setPopupOpen] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(null);

    const openLocation = row => {
        fetchDetailLocation(row.locationId, success => {
            setCurrentLocation(success);
            setPopupOpen(true);
        });
    };

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
        updateFetchLocation(location.locId, location.selectedVehicle, 'Update');
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

    useEffect(() => {
        if (id) {
            fetchDetailLocation(id, success => {
                setCurrentLocation(success);
                setPopupOpen(true);
            });
        }
    }, [id, fetchDetailLocation]);

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
