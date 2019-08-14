import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import LocationItem from "./LocationItem";
import PopupValidateReservation from "./PopupValidateReservation/PopupValidateReservation";

const LocationList = props => {

    const {locations, completeView, fetchDetailLocation} = props;

    const [popupOpen, setPopupOpen] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [dataCurrentLocation, setDataCurrentLocation] = useState(null);

    useEffect(() => {

        if(completeView && currentLocation != null && popupOpen) {
            fetchDetailLocation(currentLocation, success => {
                setPopupOpen(true);
                setDataCurrentLocation(success);
            })
        }

    }, [popupOpen, fetchDetailLocation, setDataCurrentLocation, completeView, currentLocation]);

    return (
        <React.Fragment>
            {locations && locations.map(item =>
                <LocationItem
                    onClick={() => {setPopupOpen(true); setCurrentLocation(item.locationId)}}
                    key={item.locationId}
                    data={item}
                    completeView={completeView}
                />
            )}

            <PopupValidateReservation
                open={popupOpen}
                onClose={() => setPopupOpen(false)}
                data={dataCurrentLocation}
            />
        </React.Fragment>
    )
};

LocationList.propTypes = {
    locations: PropTypes.array.isRequired,
    completeView: PropTypes.bool,
    fetchDetailLocation: PropTypes.func
};

export default LocationList;