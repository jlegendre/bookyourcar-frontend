import LocationList from './LocationList.jsx'
import {connect} from 'react-redux';
import {fetchGetLocation} from "../../../../redux/actions/datapage";

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDetailLocation: (locationId, success) => dispatch(fetchGetLocation(locationId, success))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);