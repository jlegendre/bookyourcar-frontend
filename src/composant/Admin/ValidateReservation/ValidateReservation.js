import ValidateReservation from './ValidateReservation.jsx';
import {connect} from 'react-redux';
import {fetchLocation, fetchLocationAdmin} from "../../../redux/actions/location";
import {getLocationList} from "../../../redux/reducers/location";
import {getListVehiclesForSelectByBrandAndModel} from "../../../redux/reducers/vehicule";

const mapStateToProps = state => {
    return {
        locations: getLocationList(state),
        listVehicle: getListVehiclesForSelectByBrandAndModel(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAdminLocation: () => dispatch(fetchLocationAdmin()),
        fetchDetailLocation: (locationId, success) => dispatch(fetchLocation(locationId, success))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ValidateReservation);