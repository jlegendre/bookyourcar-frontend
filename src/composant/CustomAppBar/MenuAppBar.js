import MenuAppBar from './MenuAppBar.jsx'
import {connect} from "react-redux";
import {setUserEmpty} from "../../redux/actions/user";


//Pour recuperer des fonctions de redux (les actions ...)
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(setUserEmpty())
    }
};


//pour envoyer des objets du store de redux
const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuAppBar)
