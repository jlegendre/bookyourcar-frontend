import ValidateReservation from './ValidateReservation.jsx';
import {connect} from 'react-redux';
import {fetchLocation, fetchLocationAdmin} from "../../../redux/actions/location";
import {getListVehiclesForSelectByBrandAndModel, getLocationList} from "../../../redux/reducers/datapage";

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