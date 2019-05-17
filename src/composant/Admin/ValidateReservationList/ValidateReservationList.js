import ValidateReservationList from './ValidateReservationList.jsx';
import {connect} from 'react-redux';
import {getLocation} from "../../../redux/reducers/user";
import {fetchAdminLocation} from "../../../redux/actions/admin";
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
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ValidateReservationList);