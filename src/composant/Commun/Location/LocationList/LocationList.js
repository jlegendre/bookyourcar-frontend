import LocationList from './LocationList.jsx'
import {connect} from 'react-redux';
import {fetchLocation} from "../../../../redux/actions/location";

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDetailLocation: (locationId, success) => dispatch(fetchLocation(locationId, success))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);