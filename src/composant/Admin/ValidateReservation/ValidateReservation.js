import ValidateReservation from './ValidateReservation.jsx';
import {connect} from 'react-redux';
import {getLocation} from "../../../redux/reducers/user";
import {fetchUserLocation} from "../../../redux/actions/user";

const mapStateToProps = state => {
    return {
        location: getLocation(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserLocation : () => dispatch(fetchUserLocation())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ValidateReservation);