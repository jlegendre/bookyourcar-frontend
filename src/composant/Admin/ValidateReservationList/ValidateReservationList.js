import ValidateReservationList from './ValidateReservationList.jsx';
import {connect} from 'react-redux';
import {getLocation} from "../../../redux/reducers/user";
import {fetchUserLocation} from "../../../redux/actions/user";
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
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ValidateReservationList);