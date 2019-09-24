import LocationList from './LocationList.jsx'
import {connect} from 'react-redux';
import {fetchLocation, updateFetchLocation} from "../../../../redux/actions/location";

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDetailLocation: (locationId, success) => dispatch(fetchLocation(locationId, success)),
        updateFetchLocation: (locationId, vehicleId, action) => dispatch(updateFetchLocation(locationId, vehicleId, action))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);