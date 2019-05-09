import MenuItem from './MenuItem.jsx';
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        pathname: state.router.location.pathname
    }
};

export default connect(mapStateToProps)(MenuItem);