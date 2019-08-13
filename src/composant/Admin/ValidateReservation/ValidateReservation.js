import ValidateReservation from './ValidateReservation.jsx';
import {connect} from 'react-redux';
import {getLocation} from "../../../redux/reducers/user";
import {fetchAdminLocation} from "../../../redux/actions/admin";
import {fetchGetLocation} from "../../../redux/actions/datapage";
import {getListVehiclesForSelectByBrandAndModel} from "../../../redux/reducers/datapage";

const mapStateToProps = state => {
    return {
        location: getLocation(state),
        listVehicle: getListVehiclesForSelectByBrandAndModel(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAdminLocation : () => dispatch(fetchAdminLocation()),
        fetchDetailLocation: (locationId, success) => dispatch(fetchGetLocation(locationId, success))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ValidateReservation);