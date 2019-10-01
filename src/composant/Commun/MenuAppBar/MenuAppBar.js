import MenuAppBar from './MenuAppBar.jsx'
import {connect} from "react-redux";
import {setAuthEmpty} from "../../../redux/actions/auth";
import {getRole} from "../../../redux/reducers/auth";
import {fetchNumberUser} from "../../../redux/actions/user";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(setAuthEmpty()),
        fetchNumberUserInWaiting: callback => dispatch(fetchNumberUser(callback))
    }
};


//pour envoyer des objets du store de redux
const mapStateToProps = (state) => {
    return {
        role: getRole(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuAppBar)
