import MyLocation from './MyLocation.jsx';
import {connect} from 'react-redux';
import {getLocationList} from "../../../redux/reducers/datapage";
import {fetchLocations} from "../../../redux/actions/location";

const mapStateToProps = state => {
    return {
        locations: getLocationList(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserLocation: () => dispatch(fetchLocations())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MyLocation);