import ValidateReservation from './ValidateReservation.jsx';
import {connect} from 'react-redux';
import {getLocation} from "../../../redux/reducers/user";
import {fetchUserLocation} from "../../../redux/actions/user";
import {fetchVehicles} from '../../../redux/actions/datapage';
import {getListVehiclesForSelectByBrandAndModel} from "../../../redux/reducers/datapage";

const mapStateToProps = state => {
    return {
        location: getLocation(state),
        listVehicle: getListVehiclesForSelectByBrandAndModel(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserLocation : () => dispatch(fetchUserLocation()),
        fetchVehicles: () => dispatch(fetchVehicles())

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ValidateReservation);