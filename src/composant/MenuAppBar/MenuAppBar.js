import MenuAppBar from './MenuAppBar.jsx'
import {connect} from "react-redux";
import {setUserEmpty} from "../../redux/actions/auth";
import {getRole} from "../../redux/reducers/auth";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(setUserEmpty())
    }
};


//pour envoyer des objets du store de redux
const mapStateToProps = (state) => {
    return {
        role: getRole(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuAppBar)
