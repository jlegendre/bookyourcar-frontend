import CustomAppBar from './CustomAppBar.jsx'
import {connect} from "react-redux";
import {getToken} from "../../redux/reducers/auth";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = (dispatch) => {
    return {

    }
};


//pour envoyer des objets du store de redux
const mapStateToProps = (state) => {
    return {
        token: getToken(state),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomAppBar)
