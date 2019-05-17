import React from 'react';
import * as PropTypes from 'prop-types';
import LocationItem from "./LocationItem";

const LocationList = props => {

    const {locations, completeView} = props;

    return (
        <React.Fragment>
            {locations && locations.map(item =>
                <LocationItem
                    key={item.locationId}
                    data={item}
                    completeView={completeView}
                />
            )}
        </React.Fragment>
    )
};

LocationList.propTypes = {
    locations: PropTypes.array.isRequired,
    completeView: PropTypes.bool
};

export default LocationList;